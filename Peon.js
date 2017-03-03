var tronco = new THREE.CylinderGeometry(5,5,20,32);
var pico = new THREE.ConeGeometry( 5,20,32);
var esfera = new THREE.SphereGeometry(3);
pico.translate(0,20,0);
esfera.translate(0,20,0);


var troncoMalla = new THREE.Mesh(tronco);
var picoMalla = new THREE.Mesh(pico);
var esferaMalla = new THREE.Mesh(esfera);

var peonForma= new THREE.Geometry();

peonForma.merge(esferaMalla.geometry, esferaMalla.matrix);
peonForma.merge(troncoMalla.geometry, troncoMalla.matrix);
peonForma.merge(picoMalla.geometry, picoMalla.matrix);


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
