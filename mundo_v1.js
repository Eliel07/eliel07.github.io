//Alfil BANDO 1
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
var materialA = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
formaA.translate(20,0,-30);
var mallaA = new THREE.Mesh( formaA, materialA);


//Alfil BANDO 2
var puntos1 = [];
for ( var j = 0; j <=22; j ++ ) {
if(i<=6){    puntos1.push( new THREE.Vector2(j,10-j));}
if(i==7){     puntos1.push( new THREE.Vector2(j-1,10-j));}
if(i>7&&i<=11){    puntos1.push( new THREE.Vector2(14-j,10-j));}
if(i>12&&i<=15){    puntos1.push( new THREE.Vector2(2,10-j));}
if(i>15&&i<=17){    puntos1.push( new THREE.Vector2(j-13,10-j));}
if(i>17){    puntos1.push( new THREE.Vector2(22-j,-8));}
}
var formaA2 = new THREE.LatheGeometry(puntos1);
var materialA2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
formaA2.translate(-20,0,20);
var mallaA2 = new THREE.Mesh( formaA2, materialA2);


//Reina BANDO 2
var rein2= new THREE.Shape();
rein2.moveTo(0, 0);
rein2.lineTo(0, 2);
rein2.lineTo(2,2);
rein2.lineTo(2, 15);
rein2.lineTo(3, 11);
rein2.lineTo(4, 12);
rein2.lineTo(5, 11);
rein2.lineTo(6, 16);
rein2.lineTo(7, 11);
rein2.lineTo(8, 12);
rein2.lineTo(9, 11);
rein2.lineTo(10,15);
rein2.lineTo(10, 2);
rein2.lineTo(12, 2);
rein2.lineTo(12, 0);
rein2.lineTo(0, 0);

var formaR2= new THREE.ExtrudeGeometry( rein2,{amount: 1} );
var materialR2= new THREE.MeshBasicMaterial( {color: 0x00ff00} );
formaR2.translate(-40,-20,10);
var mallaR2= new THREE.Mesh( formaR2,materialR2);


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
var materialR = new THREE.MeshBasicMaterial( {color: 0xffff00} );
formaR.translate(40,20,-30);
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

var materialP = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
peonForma.translate(-20,20,-30);
var peonMalla = new THREE.Mesh(peonForma, materialP);


//PEON BANDO 2
var tronco1= new THREE.CylinderGeometry(4,4,20,4);
var pico1= new THREE.ConeGeometry( 4,20,20);
var esfera1= new THREE.SphereGeometry(5);
pico1.translate(0,20,0);
esfera1.translate(0,20,0);

var troncoMalla1= new THREE.Mesh(tronco1);
var picoMalla1= new THREE.Mesh(pico1);
var esferaMalla1= new THREE.Mesh(esfera1);

var peonForma1= new THREE.Geometry();

peonForma1.merge(esferaMalla1.geometry, esferaMalla1.matrix);
peonForma1.merge(troncoMalla1.geometry, troncoMalla1.matrix);
peonForma1.merge(picoMalla1.geometry, picoMalla1.matrix);

var materialP1= new THREE.MeshBasicMaterial( {color: 0xffff00} );
peonForma1.translate(-50,-20,10);
var peonMalla1= new THREE.Mesh(peonForma1,materialP1);


var escena = new THREE.Scene();
escena.add(mallaA);
escena.add(mallaR);
escena.add(peonMalla);
//BANDO 2
escena.add(mallaA2);
escena.add(mallaR2);
escena.add(peonMalla1);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 160;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
