import * as THREE from 'three';
import FresnelShader from './shaders/FresnelShader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier';

// MAIN
export default class BubbleScene {
    container: HTMLDivElement;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    clock = new THREE.Clock();
    firstBubble: THREE.Mesh;
    secondBubble: THREE.Mesh;
    refractSphereCamera: THREE.CubeCamera;
    textMesh: THREE.Mesh | null = null;
    firstExplode: Boolean = false;
    secondExplode: Boolean = false;
    firstMaterial: THREE.ShaderMaterial;
    secondMaterial: THREE.ShaderMaterial;
    startY: number;
    endY: number;
    sphereRadius: number = 35;
    bubbleSpeed: number = 0;
    firstMoving: boolean = true;
    secondMoving: boolean = false;
    sphereGeometry: THREE.SphereGeometry;
    verticesCount: number;
    position_clone: Float32Array;
    normals_clone: Float32Array;
    bubbleDamping: number = 2;

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.scene = new THREE.Scene();
        var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(0,0,400);
        this.camera.lookAt(this.scene.position);

        this.renderer = new THREE.WebGLRenderer( {antialias:true} );
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor( 0x000000, 0 ); 
        this.container.appendChild( this.renderer.domElement );

        // LIGHT
        var light = new THREE.PointLight(0xffffff);
        light.position.set(0,250,0);
        this.scene.add(light);

        // SKYBOX
        var imagePrefix = "./assets/space_skybox/";
        var directions = ["left", "right", "front", "back", "top", "bottom"];
        var imageSuffix = ".png";
        
        var skyGeometry = new THREE.BoxGeometry(5000, 5000, 5000);
        
        var loader = new THREE.TextureLoader();
        var materialArray: THREE.MeshBasicMaterial[] = [];
        
        directions.forEach((direction) => {
            materialArray.push(new THREE.MeshBasicMaterial({
                map: loader.load(imagePrefix + direction + imageSuffix),
                side: THREE.BackSide
            }));
        });
        
        var skyBox = new THREE.Mesh(skyGeometry, materialArray);
        skyBox.name = "Skybox";
        this.scene.add(skyBox);

        // REFRACT SPHERE CAMERA
        let cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
            format: THREE.RGBAFormat,
            generateMipmaps: true,
            minFilter: THREE.LinearMipmapLinearFilter
        });
        this.refractSphereCamera = new THREE.CubeCamera(0.1, 5000, cubeRenderTarget);
                
        var fShader = FresnelShader
        
        // create custom material for the shader
        this.firstMaterial = new THREE.ShaderMaterial( 
        {
            uniforms: 		THREE.UniformsUtils.clone(fShader.uniforms),
            vertexShader:   fShader.vertexShader,
            fragmentShader: fShader.fragmentShader,
        }   );

        this.secondMaterial = new THREE.ShaderMaterial( 
        {
            uniforms: 		THREE.UniformsUtils.clone(fShader.uniforms),
            vertexShader:   fShader.vertexShader,
            fragmentShader: fShader.fragmentShader,
        }   );
        
        // SPHERE
        this.sphereGeometry = new THREE.SphereGeometry( this.sphereRadius, 64, 32 );
        // tessellate modifier here
        const tessellateModifier = new TessellateModifier(2, 128);
        this.sphereGeometry = tessellateModifier.modify(this.sphereGeometry);

        const numFaces = this.sphereGeometry.attributes.position.count / 3;
        const vel = new Float32Array( numFaces * 3 * 3);

        for (let f = 0; f < numFaces; f++) {
            const index = 9 * f

            for (let i = 0; i < 3; i++) {
                let dirX = Math.random() * 0.1
                let dirY = Math.random() * 0.1
                let dirZ = Math.random() * 0.1

                vel[index + (3 * i)] = dirX;
                vel[index + (3 * i) + 1] = dirY;
                vel[index + (3 * i) + 2] = dirZ;
            }
        }
        this.sphereGeometry.setAttribute('vel', new THREE.BufferAttribute(vel, 3));

        this.position_clone = JSON.parse(JSON.stringify(this.sphereGeometry.attributes.position.array)) as Float32Array;
        this.normals_clone = JSON.parse(JSON.stringify(this.sphereGeometry.attributes.normal.array)) as Float32Array;

        // CREATING RIPPLE ANIMATION SETUP
        this.verticesCount = this.sphereGeometry.attributes.position.count;
        
        // POSITIONING SPHERES
        let sphereDepth = 100
        this.firstBubble = new THREE.Mesh( this.sphereGeometry, this.firstMaterial );
        this.secondBubble = new THREE.Mesh( this.sphereGeometry, this.secondMaterial );

        var distance = new THREE.Vector3(0, 0, sphereDepth).length();  // distance between camera and mesh back left edge
        var verticalFOV = THREE.MathUtils.degToRad( VIEW_ANGLE );
        var visibleHeight = 2 * Math.tan( verticalFOV / 2 ) * distance;
        var visibleWidth = visibleHeight * ASPECT;

        this.startY = -visibleHeight - this.sphereRadius * 2.5;
        this.endY = visibleHeight + this.sphereRadius * 2.5;

        // Position the sphere at the bottom of the screen
        this.firstBubble.position.set(visibleWidth, this.startY, sphereDepth);
        this.secondBubble.position.set(0, this.startY, sphereDepth);

        this.scene.add(this.firstBubble);
        this.scene.add(this.secondBubble);
        // SPHERE TEXT
        let fontLoader = new FontLoader();
        fontLoader.load( './assets/three_fonts/helvetiker_bold.typeface.json', ( font ) => {
            let geometry = new TextGeometry( 'Javascript', {
                font: font,
                size: 20,
                height: 5,
            });
            geometry.computeBoundingBox();
            var width = 100
            if (geometry.boundingBox)
                width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
            
            let material = new THREE.MeshBasicMaterial({ color: 0x163898 });
            this.textMesh = new THREE.Mesh( geometry, material );
        
            // position the text in front of the sphere and center it
            this.textMesh.position.set(-width/2, 0, 200);
            this.scene.add( this.textMesh );
        });

        this.scene.add(this.refractSphereCamera );
        this.refractSphereCamera.position.set(0, 0, this.firstBubble.position.z + 50);
        
        document.addEventListener("keydown", (e) => {
            if(e.key == "k") {
                this.firstExplode = true;
                this.secondExplode = true;
            }
            console.log("Key pressed");
        });
        this.animate();
    }

    animate() 
    {
        requestAnimationFrame(this.animate.bind(this));
        this.firstBubble.visible = false;
        this.secondBubble.visible = false;
        if (this.textMesh)
            this.textMesh.visible = false;


        // Update the sphere position
        if (this.firstBubble.position.y > this.sphereRadius && this.secondMoving == false)
            this.secondMoving = true;
        if (this.secondBubble.position.y > this.sphereRadius && this.firstMoving == false)
            this.firstMoving = true;
        
        if (this.firstMoving && this.firstExplode == false)
            this.firstBubble.translateY(0.3);
        if (this.secondMoving && this.secondExplode == false)
            this.secondBubble.translateY(0.3);

        if (this.firstBubble.position.y > this.endY) {
            this.firstMoving = false;
            this.firstBubble.position.y = this.startY
        }
        if (this.secondBubble.position.y > this.endY) {
            this.secondMoving = false;
            this.secondBubble.position.y = this.startY
        }

        let firstProportion: number
        if (this.firstBubble.position.y < 0)
            firstProportion = (this.firstBubble.position.y - this.startY)/(-this.startY);
        else
            firstProportion = (this.firstBubble.position.y)/(this.endY)

        // Update the sphere opacity
        if (this.firstBubble.position.y < 0 && firstProportion < 0.1) {
            this.firstMaterial.uniforms.opacity.value = firstProportion * 10.0;
        } else {
            this.firstMaterial.uniforms.opacity.value = 1.0;
        }

        let secondProportion: number
        if (this.secondBubble.position.y < this.sphereRadius)
            secondProportion = (this.secondBubble.position.y - this.startY)/(-this.startY);
        else
            secondProportion = (this.secondBubble.position.y)/(this.endY)

        // Update the sphere opacity
        if (this.secondBubble.position.y < 0 && secondProportion < 0.1) {
            this.secondMaterial.uniforms.opacity.value = secondProportion * 10.0;
        } else {
            this.secondMaterial.uniforms.opacity.value = 1.0;
        }

        // Create surface animation
        const now = Date.now() / 200;
        // iterate all vertices
        for (let i = 0; i < this.verticesCount; i++) {
            // indices
            const ix = i * 3
            const iy = i * 3 + 1
            const iz = i * 3 + 2

            // use uvs to calculate wave
            const uX = this.sphereGeometry.attributes.uv.getX(i) * Math.PI * 16
            const uY = this.sphereGeometry.attributes.uv.getY(i) * Math.PI * 16

            // calculate current vertex wave height
            const xangle = (uX + now)
            const xsin = Math.sin(xangle) * this.bubbleDamping
            const yangle = (uY + now)
            const ycos = Math.cos(yangle) * this.bubbleDamping

            // set new position
            this.sphereGeometry.attributes.position.setX(i, this.position_clone[ix] + this.normals_clone[ix] * (xsin + ycos))
            this.sphereGeometry.attributes.position.setY(i, this.position_clone[iy] + this.normals_clone[iy] * (xsin + ycos))
            this.sphereGeometry.attributes.position.setZ(i, this.position_clone[iz] + this.normals_clone[iz] * (xsin + ycos))
        }
        this.sphereGeometry.computeVertexNormals();
        this.sphereGeometry.attributes.position.needsUpdate = true;
        
        // Update refraction material renderer camera
        this.refractSphereCamera.update(this.renderer, this.scene);
        this.firstBubble.visible = true;
        this.secondBubble.visible = true;
        if (this.textMesh)
            this.textMesh.visible = true;
        (this.firstBubble.material as THREE.ShaderMaterial).uniforms['tCube'].value = this.refractSphereCamera.renderTarget.texture;
        (this.secondBubble.material as THREE.ShaderMaterial).uniforms['tCube'].value = this.refractSphereCamera.renderTarget.texture;
        if (this.firstExplode)
            this.firstMaterial.uniforms.amplitude.value += 1.0;
        this.render();
    }

    render() 
    {
        this.renderer.render( this.scene, this.camera );
    }

}