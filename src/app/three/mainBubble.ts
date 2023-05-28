import * as THREE from 'three';
import FresnelShader from './shaders/FresnelShader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// MAIN
export default class BubbleScene {
    container: HTMLDivElement;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    clock = new THREE.Clock();
    sphere: THREE.Mesh;
    refractSphereCamera: THREE.CubeCamera;
    textMesh: THREE.Mesh | null = null;

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.scene = new THREE.Scene();
        var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(0,150,400);
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
        var customMaterial = new THREE.ShaderMaterial( 
        {
            uniforms: 		fShader.uniforms,
            vertexShader:   fShader.vertexShader,
            fragmentShader: fShader.fragmentShader
        }   );
        
        // SPHERE
        var sphereGeometry = new THREE.SphereGeometry( 100, 64, 32 );

        this.sphere = new THREE.Mesh( sphereGeometry, customMaterial );
        this.sphere.position.set(0, 50, 100);
        this.scene.add(this.sphere);

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
            this.textMesh.position.set(-width/2, 70, 200); // Adjust these values as per your need
            this.scene.add( this.textMesh );
        });

        this.scene.add(this.refractSphereCamera );
        this.refractSphereCamera.position.set(this.sphere.position.x, this.sphere.position.y, this.sphere.position.z + 50);

        this.animate();
    }

    animate() 
    {
        requestAnimationFrame(this.animate.bind(this));
        this.sphere.visible = false;
        if (this.textMesh)
            this.textMesh.visible = false;
        this.refractSphereCamera.update(this.renderer, this.scene);
        this.sphere.visible = true;
        if (this.textMesh)
            this.textMesh.visible = true;
        (this.sphere.material as THREE.ShaderMaterial).uniforms['tCube'].value = this.refractSphereCamera.renderTarget.texture;
        this.render();
    }

    render() 
    {
        this.renderer.render( this.scene, this.camera );
    }

}


// FUNCTIONS 		




// const createScene = () => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     const geometry = new THREE.SphereGeometry(1, 32, 32);
//     const material = new THREE.MeshBasicMaterial({color: 0x00ff00, transparent: true, opacity: 0.5});
//     const bubble = new THREE.Mesh(geometry, material);

//     scene.add(bubble);

//     const animate = () => {
//         requestAnimationFrame(animate);
//         bubble.position.y += 0.01;
//         bubble.material.opacity += 0.01;
//         renderer.render(scene, camera);
//     };

//     animate();

//     return renderer.domElement;
// };
