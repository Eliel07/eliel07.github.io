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
//Tablero multicolor
var cubo;
for (var i=0;i<2;i++)
{
for (var j=0;j<8;j++)
{
var cubo= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo.position.x =-100+j*10;
  cubo.position.z=-i*10;
  escena.add(cubo);
}
}

//Tablero multicolor
var cubo1;
for (var k=0;k<2;k++)
{
for (var l=0;l<8;l++)
{
var cubo1= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo1.position.x =100+l*10;
  cubo1.position.z=-k*10;
  escena.add(cubo1);
}
}


//Tablero multicolor
var cubo2;
for (var k=0;k<2;k++)
{
for (var l=0;l<8;l++)
{
var cubo2= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo2.position.x =100+l*10;
  cubo2.position.z=-k*10;
  cubo2.position.y=100;
  escena.add(cubo2);
}
}

//Tablero multicolor
var cubo3;
for (var k=0;k<2;k++)
{
for (var l=0;l<8;l++)
{
var cubo3= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo3.position.x =300+l*10;
  cubo3.position.z=-k*10;
  cubo3.position.y=-100;
  escena.add(cubo3);
}
}

//------------------------------------------------
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
