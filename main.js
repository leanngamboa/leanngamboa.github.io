// import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
  
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(innerWidth, innerHeight);
// renderer.setPixelRatio(2);
// document.body.appendChild(renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// const material = new THREE.MeshBasicMaterial({color: 0x00FF00});

// const mesh = new THREE.Mesh(boxGeometry, material);

// scene.add(mesh)

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera)
//   mesh.rotation.x += .01;
//   mesh.rotation.y += .01;
// }



// animate();

import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xE5E5FF);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  canvas: document.querySelector('#bg')
});
// renderer.setClearColor( 0xffffff, 0)
renderer.setPixelRatio(devicePixelRatio * 2);
renderer.setSize(innerWidth, innerHeight);
camera.position.setY(-16);
camera.rotation.y = 1.57;
camera.rotation.z = 1.05;
// camera.position.setZ(64);
// camera.rotation.z = 1.570/2;
renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(16, 8, 16, 24);
const material = new THREE.MeshBasicMaterial({
  color: 0x808080,
  wireframe: true
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
// torus.rotation.y = 1.570/2;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
  // renderer.setSize(innerWidth, innerHeight);

  torus.rotation.z += 0.001;
  // torus.rotation.y -= 0.002;
}

animate();