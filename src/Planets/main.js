import * as THREE from 'three';
import PhysicsBody from './Bodies/physicsBody.js'
import Star from './Bodies/star'

let scene, camera, renderer, sun, planet;
let planetBounceHeight = 5;
let planetBounceDelta = .01;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 45, 1, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  document.body.appendChild( renderer.domElement );

  camera.position.z = 25;

  sun = new Star({position : [0, 0, 0],  geometry : new THREE.SphereGeometry(5, 32, 16), pointLight : new THREE.PointLight("#f2df07", 1000, 0),  material : new THREE.MeshStandardMaterial({color : "#f2df07"}), ambientLight : new THREE.AmbientLight(0xffffff, 1)});

  planet = new PhysicsBody({position : [10, 0, 0],  geometry : new THREE.SphereGeometry(1, 32, 16),  material : new THREE.MeshStandardMaterial({color : "#2d7af7"})});
  sun.group.add(planet)
  scene.add(sun.group);

  resize();
}

function animate() {
  sun.group.rotation.set(0, sun.group.rotation.y + .01, 0);

  let delta = planetBounceDelta;
  if (planet.position.y > planetBounceHeight || planet.position.y < -1 * planetBounceHeight){
    planetBounceDelta *= -1;
    delta = planetBounceDelta;
  }
  planet.position.set(planet.position.x, planet.position.y + delta, planet.position.z)
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