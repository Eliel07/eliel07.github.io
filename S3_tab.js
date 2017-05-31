var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-5;
camara.right = window.innerWidth/5;
camara.top = window.innerHeight/5;
camara.bottom= window.innerHeight/-5;
camara.near = .1;
camara.far = 100;
camara.updateProjectionMatrix();

camara.position.z = 45;

var escena = new THREE.Scene();
//Tablero multicolor 1
var cubo;
for (var k1=0;k1<2;k1++)
{
for (var l1=0;l1<63;l1++)
{
var cubo= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo.position.x =-310+l1*10;
  cubo.position.z=-k1*10;
  cubo.position.y=-130;
  escena.add(cubo);
}
}

//Tablero multicolor 2
var cubo1;
for (var k2=0;k2<2;k2++)
{
for (var l2=0;l2<12;l2++)
{
var cubo1= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo1.position.x =-310+l2*10;
  cubo1.position.z=-k2*10;
  cubo1.position.y=-70;
  escena.add(cubo1);
}
}


//Tablero multicolor  3
var cubo2;
for (var k3=0;k3<2;k3++)
{
for (var l3=0;l3<13;l3++)
{
var cubo2= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo2.position.x =180+l3*10;
  cubo2.position.z=-k3*10;
  cubo2.position.y=-70;
  escena.add(cubo2);
}
}

//Tablero multicolor 4
var cubo3;
for (var k4=0;k4<2;k4++)
{
for (var l4=0;l4<30;l4++)
{
var cubo3= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo3.position.x =-150+l4*10;
  cubo3.position.z=-k4*10;
  cubo3.position.y=-70;
  escena.add(cubo3);
}
}

//Tablero multicolor 5
var cubo4;
for (var k5=0;k5<2;k5++)
{
for (var l5=0;l5<36;l5++)
{
var cubo4= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo4.position.x =-180+l5*10;
  cubo4.position.z=-k5*10;
  cubo4.position.y=-10;
  escena.add(cubo4);
}
}

//Tablero multicolor 6
var cubo5;
for (var k6=0;k6<2;k6++)
{
for (var l6=0;l6<10;l6++)
{
var cubo5= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo5.position.x =-310+l6*10;
  cubo5.position.z=-k6*10;
  cubo5.position.y=-10;
  escena.add(cubo5);
}
}

//Tablero multicolor 7
var cubo6;
for (var k7=0;k7<2;k7++)
{
for (var l7=0;l7<10;l7++)
{
var cubo6= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo6.position.x =210+l7*10;
  cubo6.position.z=-k7*10;
  cubo6.position.y=-10;
  escena.add(cubo6);
}
}

//Tablero multicolor 8
var cubo7;
for (var k8=0;k8<2;k8++)
{
for (var l8=0;l8<15;l8++)
{
var cubo7= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo7.position.x =-310+l8*10;
  cubo7.position.z=-k8*10;
  cubo7.position.y=50;
  escena.add(cubo7);
}
}

//Tablero multicolor 9
var cubo8;
for (var k9=0;k9<2;k9++)
{
for (var l9=0;l9<15;l9++)
{
var cubo8= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo8.position.x =150+l9*10;
  cubo8.position.z=-k9*10;
  cubo8.position.y=50;
  escena.add(cubo8);
}
}

//Tablero multicolor 10
var cubo9;
for (var k10=0;k10<2;k10++)
{
for (var l10=0;l10<30;l10++)
{
var cubo9= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo9.position.x =-150+l10*10;
  cubo9.position.z=-k10*10;
  cubo9.position.y=110;
  escena.add(cubo9);
}
}

//Tablero multicolor 11
var cubo10;
for (var k11=0;k11<2;k11++)
{
for (var l11=0;l11<28;l11++)
{
var cubo10= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo10.position.x =-130+l11*10;
  cubo10.position.z=-k11*10;
  cubo10.position.y=120;
  escena.add(cubo10);
}
}
//------------------------------------------------
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
