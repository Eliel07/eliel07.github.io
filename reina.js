//var base = new THREE.CircleGeometry( 1.5, 1.5 );
var tronco = new THREE.CylinderGeometry( 1, 2, 1);
var pico = new THREE.ConeGeometry( 1,1,1);
//var base1 = new THREE.CircleGeometry( 1.5, 1 );
pico.translate(0,2,0);
//base1.translate(0,1,0);

//var baseMalla = new THREE.Mesh(base);
var troncoMalla = new THREE.Mesh(tronco);
var picoMalla = new THREE.Mesh(pico);
//var base1Malla = new THREE.Mesh(base1);

var reinaForma= new THREE.Geometry();

//reinaForma.merge(baseMalla.geometry, baseMalla.matrix);
reinaForma.merge(troncoMalla.geometry, troncoMalla.matrix);
reinaForma.merge(picoMalla.geometry, picoMalla.matrix);
//reinaForma.merge(base1Malla.geometry, base1Malla.matrix);

var material = new THREE.MeshNormalMaterial();
var reinaMalla = new THREE.Mesh(reinaForma, material);
var escena = new THREE.Scene();
escena.add(reinaMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 60;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
