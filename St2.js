var camara = new THREE.OrthographicCamera();
THREE.ImageUtils.crossOrigin='';
var textura= THREE.ImageUtils.loadTexture('https://eliel07.github.io/crate.gif');
var material = new THREE.MeshBasicMaterial({map:textura});

camara.left = window.innerWidth/-5;
camara.right = window.innerWidth/5;
camara.top = window.innerHeight/5;
camara.bottom= window.innerHeight/-5;
camara.near = .1;
camara.far = 100;
camara.updateProjectionMatrix();

camara.position.z = 45;

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
reyForma.translate(150,-23,0);

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
reyForma2.translate(-150,-23,0);

var material2 = new THREE.MeshNormalMaterial();
var reyMalla2 = new THREE.Mesh(reyForma2, material2);

var escena = new THREE.Scene();

//Tablero multicolor 1
var cubo1;
for (var k1=0;k1<2;k1++)
{
for (var l1=0;l1<63;l1++)
{
var cubo1= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);

  cubo1.position.x =-310+l1*10;
  cubo1.position.z=-k1*10;
  cubo1.position.y=-130;
  escena.add(cubo1);
}
}

//Tablero multicolor 2
var cubo2;
for (var k2=0;k2<2;k2++)
{
for (var l2=0;l2<19;l2++)
{
var cubo2= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo2.position.x =-310+l2*10;
  cubo2.position.z=-k2*10;
  cubo2.position.y=-80;
  escena.add(cubo2);
}
}


//Tablero multicolor  3
var cubo3;
for (var k3=0;k3<2;k3++)
{
for (var l3=0;l3<18;l3++)
{
var cubo3= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo3.position.x =-90+l3*10;
  cubo3.position.z=-k3*10;
  cubo3.position.y=-80;
  escena.add(cubo3);
}
}

//Tablero multicolor 4
var cubo4;
for (var k4=0;k4<2;k4++)
{
for (var l4=0;l4<19;l4++)
{
var cubo4= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo4.position.x =120+l4*10;
  cubo4.position.z=-k4*10;
  cubo4.position.y=-80;
  escena.add(cubo4);
}
}

//Tablero multicolor 5
var cubo5;
for (var k5=0;k5<2;k5++)
{
for (var l5=0;l5<10;l5++)
{
var cubo5= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo5.position.x =-310+l5*10;
  cubo5.position.z=-k5*10;
  cubo5.position.y=-30;
  escena.add(cubo5);
}
}

//Tablero multicolor 6
var cubo6;
for (var k6=0;k6<2;k6++)
{
for (var l6=0;l6<36;l6++)
{
var cubo6= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo6.position.x =-180+l6*10;
  cubo6.position.z=-k6*10;
  cubo6.position.y=-30;
  escena.add(cubo6);
}
}

//Tablero multicolor 7
var cubo7;
for (var k7=0;k7<2;k7++)
{
for (var l7=0;l7<10;l7++)
{
var cubo7= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo7.position.x =210+l7*10;
  cubo7.position.z=-k7*10;
  cubo7.position.y=-30;
  escena.add(cubo7);
}
}

//Tablero multicolor 8
var cubo8;
for (var k8=0;k8<2;k8++)
{
for (var l8=0;l8<25;l8++)
{
var cubo8= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo8.position.x =-310+l8*10;
  cubo8.position.z=-k8*10;
  cubo8.position.y=20;
  escena.add(cubo8);
}
}

//Tablero multicolor 9
var cubo9;
for (var k9=0;k9<2;k9++)
{
for (var l9=0;l9<25;l9++)
{
var cubo9= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo9.position.x =60+l9*10;
  cubo9.position.z=-k9*10;
  cubo9.position.y=20;
  escena.add(cubo9);
}
}

//Tablero multicolor 10
var cubo10;
for (var k10=0;k10<2;k10++)
{
for (var l10=0;l10<30;l10++)
{
var cubo10= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10),material);
  cubo10.position.x =-150+l10*10;
  cubo10.position.z=-k10*10;
  cubo10.position.y=70;
  escena.add(cubo10);
}
}

//Tablero multicolor 11

for (var k11=0;k11<2;k11++)
{
for (var l11=0;l11<26;l11++)
{
//Textura
			var	cubo11=new THREE.BoxGeometry(10,10,-10);
          Textura_cubo11=new THREE.ImageUtils.loadTexture("cesped.jpg");
					Textura_cubo11.wrapS=Textura_cubo11.wrapT=THREE.RepeatWrapping;
					Textura_cubo11.repeat.set(10,10);
					// Material y agregado la textura
					Material_cubo11=new THREE.MeshBasicMaterial({map:Textura_cubo11});
					
			var		Territorio11=new THREE.Mesh(cubo11,Material_cubo11);

  cubo11.position.x =-130+l11*10;
  cubo11.position.z=-k11*10;
  cubo11.position.y=80;
  escena.add(Territorio11);
}
}
escena.add(reyMalla);
escena.add(reyMalla2);
//------------------------------------------------
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
