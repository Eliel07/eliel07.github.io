function setup(){
//*******************************************************************************
//Figura1

//CRUZ
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

//Figura2
//CRUZ2
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
var cruz2 = new THREE.ExtrudeGeometry( reina,{amount: 0.0} );

//CUERPO2
var puntos3 = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=4){     puntos3.push( new THREE.Vector2(i,16));}
if(i==5){     puntos3.push( new THREE.Vector2(2,11));}
if(i==6){     puntos3.push( new THREE.Vector2(4,9));}
if(i==7){     puntos3.push( new THREE.Vector2(4,8));}
if(i==8){    puntos3.push( new THREE.Vector2(2,8));}
if(i==9){     puntos3.push( new THREE.Vector2(4,0));}
    if(i==10){    puntos3.push( new THREE.Vector2(0,0));}}
var cuerpo2 = new THREE.LatheGeometry(puntos3);

//BASE2
var puntos4 = [];
for ( var i = 0; i <=22; i ++ ) {
if(i<=6){     puntos4.push( new THREE.Vector2(i,0));}
if(i==7){     puntos4.push( new THREE.Vector2(6,-2));}
if(i==8){    puntos4.push( new THREE.Vector2(0,-2));}}

var base2 = new THREE.LatheGeometry(puntos4);

//UNION
var cruzMalla2 = new THREE.Mesh(cruz2);
var cuerpoMalla2 = new THREE.Mesh(cuerpo2);
var baseMalla2= new THREE.Mesh(base2);

var reyForma2= new THREE.Geometry();

reyForma2.merge(cruzMalla2.geometry, cruzMalla2.matrix);
reyForma2.merge(cuerpoMalla2.geometry, cuerpoMalla2.matrix);
reyForma2.merge(baseMalla2.geometry, baseMalla2.matrix);
reyForma2.translate(60,7,0);

var material2 = new THREE.MeshNormalMaterial();
var reyMalla2 = new THREE.Mesh(reyForma2, material2);

var escena = new THREE.Scene();
//Tablero multicolor
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

//*****************************************************************************

cubo1= new THREE.Mesh(new THREE.BoxGeometry(10,10,0),
                      new THREE.MeshNormalMaterial());
                      
cubo2= new THREE.Mesh(new THREE.BoxGeometry(10,10,0),
                      new THREE.MeshNormalMaterial());
                      
                     

cubo1.position.x= 80;
cubo2.position.x= -10;

camara = new THREE.PerspectiveCamera();
camara.position.z=20;

raycaster1= new THREE.Raycaster(reyMalla.positioin, new THREE.Vector3(1,0,0));
raycaster2= new THREE.Raycaster(reyMalla.positioin, new THREE.Vector3(-1,0,0));

raycaster3= new THREE.Raycaster(reyMalla2.positioin, new THREE.Vector3(1,0,0));
raycaster4= new THREE.Raycaster(reyMalla2.positioin, new THREE.Vector3(-1,0,0));

escena = new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(camara);
escena.add(reyMalla);
escena.add(reyMalla2);

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95,
                  window.innerHeight*.95);
                  
document.body.appendChild(renderer.domElement);
step=0.03;
}

function loop(){
obstaculo1= raycaster1.intersectObject(cubo1);
obstaculo2= raycaster2.intersectObject(cubo2);
obstaculo3= raycaster3.intersectObject(reyMalla);
obstaculo4= raycaster4.intersectObject(reyMalla2);

if (((obstaculo1.length>0 && (obstaculo1[0].distance<=0.5))|| 
    (obstaculo2.length>0 && (obstaculo2[0].distance<=0.5)))||((obstaculo3.length>0 && (obstaculo3[0].distance<=0.5))|| 
    (obstaculo4.length>0 && (obstaculo4[0].distance<=0.5))))
    
step=-step;

reyMalla.position.x +=step;
reyMalla2.position.x +=step;

raycaster1.set(reyMalla.position, new THREE.Vector3(1,0,0));
raycaster2.set(reyMalla.position, new THREE.Vector3(-1,0,0));
raycaster3.set(reyMalla2.position, new THREE.Vector3(1,0,0));
raycaster4.set(reyMalla2.position, new THREE.Vector3(-1,0,0));

renderer.render(escena,camara);
requestAnimationFrame(loop);
}

var cubo1, cubo2, escena, camara, renderer,pelota;
var raycaster1,step,raycaster2,raycaster3,raycaster4;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4;
setup();
loop();
