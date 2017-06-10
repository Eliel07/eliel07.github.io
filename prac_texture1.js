function listener() {
	camara.aspect = window.innerWidth / window.innerHeight;
	camara.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function pushar(e) {
  if (e.keyCode === 97)
    camara.position.z++;
  else if (e.keyCode === 122)
    camara.position.z--;
}

function tablero(){


for (var k1=0;k1<2;k1++)
{
for (var l1=0;l1<63;l1++)
{
var cubo1= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);

  cubo1.position.x =-310+l1*10;
  cubo1.position.z=-k1*10;
  cubo1.position.y=-130;
  escena.add(cubo1);
}
}

//Tablero multicolor 2

for (var k2=0;k2<2;k2++)
{
for (var l2=0;l2<19;l2++)
{
var cubo2= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo2.position.x =-310+l2*10;
  cubo2.position.z=-k2*10;
  cubo2.position.y=-80;
  escena.add(cubo2);
}
}


//Tablero multicolor  3

for (var k3=0;k3<2;k3++)
{
for (var l3=0;l3<18;l3++)
{
var cubo3= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo3.position.x =-90+l3*10;
  cubo3.position.z=-k3*10;
  cubo3.position.y=-80;
  escena.add(cubo3);
}
}

//Tablero multicolor 4

for (var k4=0;k4<2;k4++)
{
for (var l4=0;l4<19;l4++)
{
var cubo4= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo4.position.x =120+l4*10;
  cubo4.position.z=-k4*10;
  cubo4.position.y=-80;
  escena.add(cubo4);
}
}

//Tablero multicolor 5

for (var k5=0;k5<2;k5++)
{
for (var l5=0;l5<10;l5++)
{
var cubo5= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo5.position.x =-310+l5*10;
  cubo5.position.z=-k5*10;
  cubo5.position.y=-30;
  escena.add(cubo5);
}
}

//Tablero multicolor 6

for (var k6=0;k6<2;k6++)
{
for (var l6=0;l6<36;l6++)
{
var cubo6= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo6.position.x =-180+l6*10;
  cubo6.position.z=-k6*10;
  cubo6.position.y=-30;
  escena.add(cubo6);
}
}

//Tablero multicolor 7

for (var k7=0;k7<2;k7++)
{
for (var l7=0;l7<10;l7++)
{
var cubo7= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo7.position.x =210+l7*10;
  cubo7.position.z=-k7*10;
  cubo7.position.y=-30;
  escena.add(cubo7);
}
}

//Tablero multicolor 8

for (var k8=0;k8<2;k8++)
{
for (var l8=0;l8<25;l8++)
{
var cubo8= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo8.position.x =-310+l8*10;
  cubo8.position.z=-k8*10;
  cubo8.position.y=20;
  escena.add(cubo8);
}
}

//Tablero multicolor 9

for (var k9=0;k9<2;k9++)
{
for (var l9=0;l9<25;l9++)
{
var cubo9= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
  cubo9.position.x =60+l9*10;
  cubo9.position.z=-k9*10;
  cubo9.position.y=20;
  escena.add(cubo9);
}
}

//Tablero multicolor 10

for (var k10=0;k10<2;k10++)
{
for (var l10=0;l10<30;l10++)
{
var cubo10= new THREE.Mesh( new THREE.CubeGeometry(10,10,-10),material);
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
	 textureLoader = new THREE.TextureLoader();
	crateTexture = textureLoader.load("cesped.jpg");
		
	
THREE.ImageUtils.crossOrigin='';
textura= THREE.ImageUtils.loadTexture('crate.gif');
material = new THREE.MeshBasicMaterial({map:textura});
forma = new THREE.CubeGeometry( 10, 10, -10);
cubo11 = new THREE.Mesh(forma, material);
  
  cubo11.position.x =-130+l11*10;
  cubo11.position.z=-k11*10;
  cubo11.position.y=80;
  escena.add(cubo11);
}
}

}




function setup() {

  escena = new THREE.Scene();
  camara = new THREE.PerspectiveCamera( 75,
                                        window.innerWidth / window.innerHeight,
                                        0.1,
                                        1000 );

  camara.position.z = 150;
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  

  
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
var reyMalla, material, reyForma;
var cruzMalla, cuerpoMalla, baseMalla, base,cuerpo, cruz;
var cubo8, cubo7, cubo6, cubo5, cubo4,cubo3, cubo2, cubo1;
var cubo9, cubo10, cubo11;
var textureLoader;
var forma, material;
setup();
loop();
tablero();
