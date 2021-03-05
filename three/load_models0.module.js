import * as THREE from '/three/three.module.js';
import { DDSLoader } from '/three/DDSLoader.js';
import { MTLLoader } from '/three/MTLLoader.js';
import { OBJLoader } from '/three/OBJLoader.js';
import { OrbitControls } from '/three/OrbitControls.js';
let camera, scene, controls;


function load(renderer,path,name,cx,cy,cz,ox,oy,oz){
  var name_obj = name+'.obj'
  var name_mtl = name+'.mtl'
  init(renderer,path,name_obj,name_mtl,cx,cy,cz,ox,oy,oz);
  animate(renderer);

}


function init(renderer,path,name_obj,name_mtl,cx,cy,cz,ox,oy,oz) {


  renderer.setPixelRatio( window.devicePixelRatio*2 );


  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
  camera.position.set(-0.8,-0.8,-0.8);


  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
  scene.add( ambientLight );

  const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
  camera.add( pointLight );
  scene.add( camera );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.listenToKeyEvents( window );
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  controls.enableZoom = false;


  const manager = new THREE.LoadingManager();
  manager.addHandler( /\.dds$/i, new DDSLoader() );


  new MTLLoader( manager )
    .setPath( path )
    .load( name_mtl, function ( materials ) {

      materials.preload();

      new OBJLoader( manager )
        .setMaterials( materials )
        .setPath( '/images/projects/' )
        .load( name_obj, function ( object ) {
          object.position.set(0,0,0);
          scene.add( object );
        }, );

    } );


  window.addEventListener( 'resize', onWindowResize );


}

function onWindowResize() {


  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

}



export {load};
