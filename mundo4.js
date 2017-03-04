//Alfil 1
var puntos = [];
for ( var i = 0; i <=22; i ++ ) {
if(i<=6){    puntos.push( new THREE.Vector2(i,10-i));}
if(i==7){     puntos.push( new THREE.Vector2(i-1,10-i));}
if(i>7&&i<=11){    puntos.push( new THREE.Vector2(14-i,10-i));}
if(i>12&&i<=15){    puntos.push( new THREE.Vector2(2,10-i));}
if(i>15&&i<=17){    puntos.push( new THREE.Vector2(i-13,10-i));}
if(i>17){    puntos.push( new THREE.Vector2(22-i,-8));}
}

var formaA = new THREE.LatheGeometry(puntos);

//var materialA = new THREE.MeshNormalMaterial();
var materialA = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
formaA.translate(20,0,-10);

var mallaA = new THREE.Mesh( formaA, materialA);
//malla.rotateX( Math.PI/5 );

//Reina

var reina = new THREE.Shape();
reina.moveTo(0, 0);
reina.lineTo(0, 2);
reina.lineTo(2,2);
reina.lineTo(2, 15);
reina.lineTo(3, 11);
reina.lineTo(4, 12);
reina.lineTo(5, 11);
reina.lineTo(6, 16);
reina.lineTo(7, 11);
reina.lineTo(8, 12);
reina.lineTo(9, 11);
reina.lineTo(10,15);
reina.lineTo(10, 2);
reina.lineTo(12, 2);
reina.lineTo(12, 0);
reina.lineTo(0, 0);

var formaR = new THREE.ExtrudeGeometry( reina,{amount: 1} );
                                       
//var materialR = new THREE.MeshNormalMaterial();
var materialR = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
formaR.translate(40,0,-10);
var mallaR = new THREE.Mesh( formaR, materialR );

//PEON
var tronco = new THREE.CylinderGeometry(4,4,20,4);
var pico = new THREE.ConeGeometry( 4,20,20);
var esfera = new THREE.SphereGeometry(5);
pico.translate(0,20,0);
esfera.translate(0,20,0);


var troncoMalla = new THREE.Mesh(tronco);
var picoMalla = new THREE.Mesh(pico);
var esferaMalla = new THREE.Mesh(esfera);

var peonForma= new THREE.Geometry();

peonForma.merge(esferaMalla.geometry, esferaMalla.matrix);
peonForma.merge(troncoMalla.geometry, troncoMalla.matrix);
peonForma.merge(picoMalla.geometry, picoMalla.matrix);


//var materialP = new THREE.MeshNormalMaterial();
var materialP = new THREE.MeshBasicMaterial( {color: 0xffffff} );
peonForma.translate(-20,0,-10);
var peonMalla = new THREE.Mesh(peonForma, materialP);

var escena = new THREE.Scene();
escena.add(mallaA);
escena.add(mallaR);
escena.add(peonMalla);

//var camara = new THREE.PerspectiveCamera();
//var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
var cubeCamera = new THREE.CubeCamera( 1, 100000, 128 );
cubeCamara.position.z = 160;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, cubeCamara );
