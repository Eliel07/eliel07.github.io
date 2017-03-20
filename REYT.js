//CRUZ
var reina = new THREE.Shape();
reina.moveTo(-1,16);
reina.lineTo(1,16);
reina.lineTo(1,18);
reina.lineTo(3, 18);
reina.lineTo(3, 20);
reina.lineTo(1, 20);
reina.lineTo(1, 22);
reina.lineTo(-1, 22);
reina.lineTo(-1,20);
reina.lineTo(-3, 20);
reina.lineTo(-3, 18);
reina.lineTo(-1,18);
reina.lineTo(-1, 16);
var cruz = new THREE.ExtrudeGeometry( reina,
                                       {amount: 0.0} );
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


var material = new THREE.MeshNormalMaterial();
var reyMalla = new THREE.Mesh(reyForma, material);
var escena = new THREE.Scene();
escena.add(reyMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 60;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

                             
                             
                             
         
