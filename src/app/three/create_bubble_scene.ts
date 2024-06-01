import * as THREE from 'three';
import FresnelShader from './shaders/FresnelShader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier';

// MAIN
export function createBubbleScene(container: HTMLDivElement) {
   const scene = new THREE.Scene();
   const SCREEN_WIDTH = container.offsetWidth,
      SCREEN_HEIGHT = container.offsetHeight;
   const VIEW_ANGLE = 45,
      ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
      NEAR = 0.1,
      FAR = 20000;
   const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
   scene.add(camera);
   camera.position.set(0, 0, 400);
   camera.lookAt(scene.position);

   const renderer = new THREE.WebGLRenderer({ antialias: true });
   renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
   renderer.setClearColor(0x000000, 0);
   container.appendChild(renderer.domElement);

   // LIGHT
   const light = new THREE.PointLight(0xffffff);
   light.position.set(0, 250, 0);
   scene.add(light);

   // SKYBOX
   const imagePrefix = './assets/space_skybox/';
   const directions = ['left', 'right', 'front', 'back', 'top', 'bottom'];
   const imageSuffix = '.png';

   const skyGeometry = new THREE.BoxGeometry(5000, 5000, 5000);

   const loader = new THREE.TextureLoader();
   const materialArray: THREE.MeshBasicMaterial[] = [];

   directions.forEach(direction => {
      materialArray.push(
         new THREE.MeshBasicMaterial({
            map: loader.load(imagePrefix + direction + imageSuffix),
            side: THREE.BackSide,
         }),
      );
   });

   const skyBox = new THREE.Mesh(skyGeometry, materialArray);
   skyBox.name = 'Skybox';
   scene.add(skyBox);

   // REFRACT SPHERE CAMERA
   const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
   });
   const refractSphereCamera = new THREE.CubeCamera(0.1, 5000, cubeRenderTarget);

   const fShader = FresnelShader;

   // create custom material for the shader
   const firstMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(fShader.uniforms),
      vertexShader: fShader.vertexShader,
      fragmentShader: fShader.fragmentShader,
   });

   const secondMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(fShader.uniforms),
      vertexShader: fShader.vertexShader,
      fragmentShader: fShader.fragmentShader,
   });

   // SPHERE
   const sphereRadius = 30;
   let sphereGeometry = new THREE.SphereGeometry(sphereRadius, 64, 32);
   // tessellate modifier here
   const tessellateModifier = new TessellateModifier(2, 1);
   sphereGeometry = tessellateModifier.modify(sphereGeometry);

   const numFaces = sphereGeometry.attributes.position.count / 3;
   const vel = new Float32Array(numFaces * 3 * 3);

   for (let f = 0; f < numFaces; f++) {
      const index = 9 * f;

      for (let i = 0; i < 3; i++) {
         const dirX = Math.random() * 0.1;
         const dirY = Math.random() * 0.1;
         const dirZ = Math.random() * 0.1;

         vel[index + 3 * i] = dirX;
         vel[index + 3 * i + 1] = dirY;
         vel[index + 3 * i + 2] = dirZ;
      }
   }

   const lifespan = new Float32Array(numFaces * 3 * 3);
   for (let i = 0; i < lifespan.length; i++) {
      lifespan[i] = Math.ceil(Math.random() * 100) / 100; // Initialize with random lifespan between 0 and 1
   }
   sphereGeometry.setAttribute('lifespan', new THREE.BufferAttribute(lifespan, 1));

   let firstGeometry = sphereGeometry.clone();
   let secondGeometry = sphereGeometry.clone();

   const firstPositionClone = JSON.parse(JSON.stringify(firstGeometry.attributes.position.array)) as Float32Array;
   const firstNormalsClone = JSON.parse(JSON.stringify(firstGeometry.attributes.normal.array)) as Float32Array;
   const secondPositionClone = JSON.parse(JSON.stringify(secondGeometry.attributes.position.array)) as Float32Array;
   const secondNormalsClone = JSON.parse(JSON.stringify(secondGeometry.attributes.normal.array)) as Float32Array;

   // CREATING RIPPLE ANIMATION SETUP
   const verticesCount = sphereGeometry.attributes.position.count;

   // POSITIONING SPHERES
   const sphereDepth = 100;
   let firstBubble = new THREE.Mesh(firstGeometry, firstMaterial);
   let secondBubble = new THREE.Mesh(secondGeometry, secondMaterial);

   const distance = new THREE.Vector3(0, 0, sphereDepth).length(); // distance between camera and mesh back left edge
   const verticalFOV = THREE.MathUtils.degToRad(VIEW_ANGLE);
   const visibleHeight = 2 * Math.tan(verticalFOV / 2) * distance;
   const visibleWidth = visibleHeight * ASPECT;

   const startY = -visibleHeight - sphereRadius * 2.5;
   const endY = visibleHeight + sphereRadius * 2.5;

   // Position the sphere at the bottom of the screen
   firstBubble.position.set(visibleWidth, startY, sphereDepth);
   secondBubble.position.set(-visibleWidth, startY, sphereDepth);

   scene.add(firstBubble);
   scene.add(secondBubble);

   scene.add(refractSphereCamera);
   refractSphereCamera.position.set(0, 0, firstBubble.position.z + 50);

   let firstExplode = false;
   let secondExplode = false;
   const raycaster = new THREE.Raycaster();
   const mouse = new THREE.Vector2();
   function onMouseClick(event: MouseEvent) {
      mouse.x = (event.clientX / container.offsetWidth) * 2 - 1;
      mouse.y = -(event.clientY / container.offsetHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);
      const intersectedObjects = intersects.map(intersect => intersect.object);
      if (intersects.length > 0) {
         if (intersectedObjects.includes(firstBubble)) {
            firstExplode = true;
         }
         if (intersectedObjects.includes(secondBubble)) {
            secondExplode = true;
         }
      }
   }
   window.addEventListener('click', onMouseClick, false);

   function render() {
      renderer.render(scene, camera);
   }

   let firstMoving = true;
   let secondMoving = false;
   const bubbleDamping = 2;
   let firstLifespanAttribute = firstGeometry.getAttribute('lifespan');
   let secondLifespanAttribute = secondGeometry.getAttribute('lifespan');
   const deltaTime = 0.02;
   let firstCount = 0;
   let secondCount = 0;
   let firstReset = false;
   let secondReset = false;

   function animate() {
      requestAnimationFrame(animate);
      firstBubble.visible = false;
      secondBubble.visible = false;

      if (firstBubble.position.y > sphereRadius && secondMoving == false) secondMoving = true;
      if (secondBubble.position.y > sphereRadius && firstMoving == false) firstMoving = true;

      if (firstMoving && firstExplode == false) firstBubble.translateY(0.4);
      if (secondMoving && secondExplode == false) {
         secondBubble.translateY(0.4);
      }

      if (firstBubble.position.y > endY) {
         firstMoving = false;
         firstBubble.position.y = startY;
      }
      if (secondBubble.position.y > endY) {
         secondMoving = false;
         secondBubble.position.y = startY;
      }

      // Create surface animation for bubble 1
      const now = Date.now() / 200;
      // iterate all vertices
      for (let i = 0; i < verticesCount; i++) {
         // indices
         const ix = i * 3;
         const iy = i * 3 + 1;
         //  const iz = i * 3 + 2;

         // use uvs to calculate wave
         const uX = firstGeometry.attributes.uv.getX(i) * Math.PI * 16;
         const uY = firstGeometry.attributes.uv.getY(i) * Math.PI * 16;

         // calculate current vertex wave height
         const xangle = uX + now;
         const xsin = Math.sin(xangle) * bubbleDamping;
         const yangle = uY + now;
         const ycos = Math.cos(yangle) * bubbleDamping;

         // set new position
         firstGeometry.attributes.position.setX(i, firstPositionClone[ix] + firstNormalsClone[ix] * (xsin + ycos));
         firstGeometry.attributes.position.setY(i, firstPositionClone[iy] + firstNormalsClone[iy] * (xsin + ycos));
      }
      firstGeometry.computeVertexNormals();
      firstGeometry.attributes.position.needsUpdate = true;

      // Create surface animation for bubble 2
      // iterate all vertices
      for (let i = 0; i < verticesCount; i++) {
         // indices
         const ix = i * 3;
         const iy = i * 3 + 1;
         //  const iz = i * 3 + 2;

         // use uvs to calculate wave
         const uX = secondGeometry.attributes.uv.getX(i) * Math.PI * 16;
         const uY = secondGeometry.attributes.uv.getY(i) * Math.PI * 16;

         // calculate current vertex wave height
         const xangle = uX + now;
         const xsin = Math.sin(xangle) * bubbleDamping;
         const yangle = uY + now;
         const ycos = Math.cos(yangle) * bubbleDamping;

         // set new position
         secondGeometry.attributes.position.setX(i, secondPositionClone[ix] + secondNormalsClone[ix] * (xsin + ycos));
         secondGeometry.attributes.position.setY(i, secondPositionClone[iy] + secondNormalsClone[iy] * (xsin + ycos));
      }
      secondGeometry.computeVertexNormals();
      secondGeometry.attributes.position.needsUpdate = true;

      // Update refraction material renderer camera
      refractSphereCamera.update(renderer, scene);
      firstBubble.visible = true;
      secondBubble.visible = true;
      (firstBubble.material as THREE.ShaderMaterial).uniforms.tCube.value = refractSphereCamera.renderTarget.texture;
      (secondBubble.material as THREE.ShaderMaterial).uniforms.tCube.value = refractSphereCamera.renderTarget.texture;
      if (firstExplode) {
         firstMaterial.uniforms.amplitude.value += 1.0;
         const firstLifespan = new Float32Array(firstLifespanAttribute.array.length);
         for (let i = 0; i < firstLifespan.length; i++) {
            firstLifespan[i] = firstLifespanAttribute.array[i] - deltaTime;
         }
         (firstLifespanAttribute as THREE.BufferAttribute).set(firstLifespan);
         firstLifespanAttribute.needsUpdate = true;
         firstCount += deltaTime;
      }
      if (secondExplode) {
         firstMaterial.uniforms.amplitude.value += 1.0;
         const secondLifespan = new Float32Array(secondLifespanAttribute.array.length);
         for (let i = 0; i < secondLifespan.length; i++) {
            secondLifespan[i] = secondLifespanAttribute.array[i] - deltaTime;
         }
         (secondLifespanAttribute as THREE.BufferAttribute).set(secondLifespan);
         secondLifespanAttribute.needsUpdate = true;
         secondCount += deltaTime;
      }
      if (firstCount >= 1) {
         firstExplode = false;
         firstReset = true;
         firstCount = 0;
      }
      if (firstReset) {
         scene.remove(firstBubble);
         firstGeometry = sphereGeometry.clone();
         firstLifespanAttribute = firstGeometry.getAttribute('lifespan');
         firstMaterial.uniforms.amplitude.value = 0.0;
         firstBubble = new THREE.Mesh(firstGeometry, firstMaterial);
         firstBubble.position.set(visibleWidth, startY, sphereDepth);
         scene.add(firstBubble);
         firstMoving = false;
         if (secondMoving == false && secondExplode == false) {
            secondMoving = true;
         }
         setTimeout(function () {
            firstMoving = true;
         }, 1600);
         firstReset = false;
      }
      if (secondCount >= 1) {
         secondExplode = false;
         secondReset = true;
         secondCount = 0;
      }
      if (secondReset) {
         scene.remove(secondBubble);
         secondGeometry = sphereGeometry.clone();
         secondLifespanAttribute = secondGeometry.getAttribute('lifespan');
         secondMaterial.uniforms.amplitude.value = 0.0;
         secondBubble = new THREE.Mesh(secondGeometry, secondMaterial);
         secondBubble.position.set(-visibleWidth, startY, sphereDepth);
         scene.add(secondBubble);
         secondMoving = false;
         if (firstMoving == false && firstExplode == false) {
            firstMoving = true;
         }
         setTimeout(function () {
            secondMoving = true;
         }, 1500);
         secondReset = false;
      }
      render();
   }

   // RESIZE HANDLER
   function onWindowResize() {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
   }
   window.addEventListener('resize', onWindowResize);

   animate();
}
