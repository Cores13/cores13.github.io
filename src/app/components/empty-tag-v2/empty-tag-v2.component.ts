
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js'
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';

@Component({
  selector: 'app-empty-tag-v2',
  templateUrl: './empty-tag-v2.component.html',
  styleUrls: ['./empty-tag-v2.component.scss']
})

export class EmptyTagV2Component {
@ViewChild('canvasElement', {static: true}) canvasElementRef: ElementRef<HTMLCanvasElement>;

  constructor(private ngZone: NgZone){}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const scene = new THREE.Scene();
      // scene.background = new THREE.Color( 0xe8e5e0 );
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);

      const renderer = new THREE.WebGLRenderer({
        canvas: this.canvasElementRef.nativeElement,
        alpha: true,
        antialias: true
      });

      renderer.setSize(window.innerWidth / 7, window.innerHeight / 7);
      if(window.innerWidth <= 600){
        camera.fov = 475;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / 4.5, window.innerHeight / 4.5);
      }else if(window.innerWidth > 600 && window.innerWidth <= 900) {
        camera.fov = 110;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / 4.5, window.innerHeight / 4.5);
      }

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        if(window.innerWidth <= 600){
          renderer.setSize(window.innerWidth / 4.5, window.innerHeight / 4.5);
        }else if(window.innerWidth > 600 && window.innerWidth <= 900) {
          camera.fov = 110;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth / 4.5, window.innerHeight / 4.5);
        }
        camera.updateProjectionMatrix();
        camera.updateMatrixWorld();
      });

      const loader = new TTFLoader();
      // Loading the TTF font file from Fontsource CDN. Can also be the link to font file from Google Fonts
      loader.load('assets/fonts/Lora/Lora-Regular.ttf', (fontData) => {
      // loader.load('https://api.fontsource.org/v1/fonts/lora/latin-600-italic.ttf', (fontData) => {
        // Convert the parsed fontData to the format Three.js understands
        const font = new Font(fontData);

        // Create the text geometry
        const textGeometry = new TextGeometry('</>', {
          font: font,
          size: 18,
          height: 5,
          curveSegments: 3200,
          bevelEnabled: false,
          bevelThickness: 0.8,
          bevelSize: 0.8,
          bevelSegments: 800,
        });

        // Create a standard material with red color and 50% gloss
        const material = new THREE.MeshStandardMaterial({
          color: 0x32A883,
          roughness: 10,
          wireframe: false,
        });

        // Geometries are attached to meshes so that they get rendered
        const textMesh = new THREE.Mesh(textGeometry, material);
        // Update positioning of the text
        textMesh.position.set(0, 0, 5);
        scene.add(textMesh);

        const pivot = new THREE.Group();
        pivot.add(textMesh)
        scene.add(pivot)
        textMesh.position.set(-22, 0, 0)
        pivot.position.set(0, 0, 0)

        const animate = function() {
          requestAnimationFrame(animate);
          pivot.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
        animate();
      });

      // LIGHTING
      const ambientLight = new THREE.AmbientLight(0x32A883);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0x32A883, 4);
      scene.add(directionalLight);
      directionalLight.position.set(-22, 0, 0);

      camera.position.z = 35;
      camera.position.y = 8;
      // orbit.update();
    });
  }
}
