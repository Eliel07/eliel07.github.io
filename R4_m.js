function listener() {
	camara.aspect = window.innerWidth / window.innerHeight;
	camara.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}


function pushar(e) {
  if (e.keyCode === 97)
    reyMalla.position.x++;
  else if (e.keyCode === 122)
    reyMalla.position.x--;
}

function tablero(){

var cubo;
for (var i=0;i<8;i++)
{
for (var j=0;j<8;j++)
{
var cubo= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo.position.x =j*10;
  cubo.position.z=-i*10;
  escena.add(cubo);
}
}
}


function setup() {

  escena = new THREE.Scene();
  camara = new THREE.PerspectiveCamera( 75,
                                        window.innerWidth / window.innerHeight,
                                        0.1,
                                        1000 );

  camara.position.z = 100;
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
var puntos2 = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=1){     puntos2.push( new THREE.Vector2(i,16));}
if(i==2){    puntos2.push( new THREE.Vector2(1,18));}
if(i==3){    puntos2.push( new THREE.Vector2(3,18));}
if(i==4){    puntos2.push( new THREE.Vector2(3,20));}
if(i==5){    puntos2.push( new THREE.Vector2(1,20));}
if(i==6){   puntos2.push( new THREE.Vector2(1,22));}
    if(i==7){    puntos2.push( new THREE.Vector2(0,22));}
      if(i==8){    puntos2.push( new THREE.Vector2(0,16));}}
var cruz = new THREE.LatheGeometry(puntos2);

//CUERPO
var puntos = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=4){     puntos.push( new THREE.Vector2(i,16));}
if(i==5){     puntos.push( new THREE.Vector2(2,11));}
if(i==6){     puntos.push( new THREE.Vector2(4,9));}
if(i==7){     puntos.push( new THREE.Vector2(4,8));}
if(i==8){    puntos.push( new THREE.Vector2(2,8));}
if(i==9){     puntos.push( new THREE.Vector2(4,0));}
    if(i==10){    puntos.push( new THREE.Vector2(0,0));}}
var cuerpo = new THREE.LatheGeometry(puntos);

//BASE
var puntos1 = [];
for ( var i = 0; i <=22; i ++ ) {
if(i<=6){     puntos1.push( new THREE.Vector2(i,0));}
if(i==7){     puntos1.push( new THREE.Vector2(6,-2));}
if(i==8){    puntos1.push( new THREE.Vector2(0,-2));}}
var base = new THREE.LatheGeometry(puntos1);

//UNION
var cruzMalla = new THREE.Mesh(cruz);
var cuerpoMalla = new THREE.Mesh(cuerpo);
var baseMalla = new THREE.Mesh(base);

var reyForma= new THREE.Geometry();
reyForma.merge(cruzMalla.geometry, cruzMalla.matrix);
reyForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
reyForma.merge(baseMalla.geometry, baseMalla.matrix);
reyForma.translate(10,7,0);

var material = new THREE.MeshNormalMaterial();
var reyMalla = new THREE.Mesh(reyForma, material);

escena.add(reyMalla);
  
  var tipoEvento = 'resize';
  var capturar = false;
  window.addEventListener( tipoEvento, listener, capturar );
  
  window.addEventListener( 'keypress', pushar, false );
}


function loop() {
  requestAnimationFrame( loop );
   renderer.render( escena, camara );
}

var malla, camara, renderer, escena;

setup();
loop();
tablero();
