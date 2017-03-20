var tronco = new THREE.CylinderGeometry(6,6,2,6);

trnco.translate(0,-2,0);


var troncoMalla = new THREE.Mesh(tronco);

var peonForma= new THREE.Geometry();


peonForma.merge(troncoMalla.geometry, troncoMalla.matrix);



var material = new THREE.MeshNormalMaterial();
var peonMalla = new THREE.Mesh(peonForma, material);
var escena = new THREE.Scene();
escena.add(peonMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 60;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
