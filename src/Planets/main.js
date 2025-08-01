import * as THREE from 'three';
import PhysicsBody from './Bodies/physicsBody.js'
import Star from './Bodies/star'

let scene, camera, renderer, sun, earth, moon, mars, mercuryGroup, clock, marsGroup, earthGroup;
let marsOrbitSpeed = 2 * Math.PI / 12;
let earthRotateSpeed = 1 / 3 * Math.PI;
let earthOrbitSpeed = 1 / 3 * Math.PI;
let mercuryOrbitSpeed = Math.PI;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 45, 1, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  document.body.appendChild( renderer.domElement );

  camera.position.z = 25;

  sun = new Star({position : [0, 0, 0],  geometry : new THREE.SphereGeometry(3, 32, 16), pointLight : new THREE.PointLight("#f2df07", 1000, 0),  material : new THREE.MeshStandardMaterial({color : "#f2df07"}), ambientLight : new THREE.AmbientLight(0xffffff, 1)});
  earth = new PhysicsBody({position : [7, 0, 0],  geometry : new THREE.SphereGeometry(1, 32, 16),  material : new THREE.MeshStandardMaterial({color : "#2d7af7"})});
  moon = new PhysicsBody({position : [2, 0, 0],  geometry : new THREE.SphereGeometry(.1, 32, 16),  material : new THREE.MeshStandardMaterial({color : "#a3a6a8"})});
  earth.rotation.x = .041;
  earth.add(moon);
  earthGroup = new THREE.Group();
  earthGroup.rotation.x = -1 * THREE.MathUtils.degToRad(10);
  earthGroup.add(earth);

  mars = new PhysicsBody({position : [10, 0, 0],  geometry : new THREE.SphereGeometry(.5, 32, 16),  material : new THREE.MeshStandardMaterial({color : "#871900"})});
  marsGroup = new THREE.Group();
  marsGroup.position.set(0, 0, 0);
  marsGroup.rotation.x = THREE.MathUtils.degToRad(10);
  marsGroup.add(mars);

  let mercury = new PhysicsBody({position : [4, 0, 0],  geometry : new THREE.SphereGeometry(.2, 32, 16),  material : new THREE.MeshStandardMaterial({color : "#665754"})})
  mercuryGroup = new THREE.Group();
  mercuryGroup.add(mercury);
  sun.group.add(mercuryGroup)

  sun.group.add(marsGroup);
  sun.group.add(earthGroup);
  sun.group.rotation.x = THREE.MathUtils.degToRad(30);
  scene.add(sun);
  scene.add(sun.group);

  clock = new THREE.Clock(true);

  resize();
}

function animate() {
  let frameTime = clock.getDelta();
  marsGroup.rotation.y += (marsOrbitSpeed * frameTime);
  earthGroup.rotation.y += (earthOrbitSpeed * frameTime)
  earth.rotation.y += (earthRotateSpeed * frameTime);
  mercuryGroup.rotation.y += (mercuryOrbitSpeed * frameTime);
  renderer.render( scene, camera );
}

function resize() {
	const container = renderer.domElement.parentNode;

	if( container ) {
		const width = container.offsetWidth;
		const height = container.offsetHeight;

		renderer.setSize( width, height );
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	}
}

window.addEventListener( 'resize', resize );
init();

export function mount( container ) {
	if( container ) {
		container.insertBefore( renderer.domElement, container.firstChild );
		resize();
	} else {
		renderer.domElement.remove();
	}
}