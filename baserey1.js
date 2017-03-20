var tronco = new THREE.CylinderGeometry(6,6,2,6);

tronco.translate(0,-2,0);


var troncoMalla = new THREE.Mesh(tronco);
var tronco= new THREE.Geometry();


var material = new THREE.MeshNormalMaterial();
var tronco = new THREE.Mesh(tronco, material);
var escena = new THREE.Scene();
escena.add(tronco);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 60;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
