var campoVision =45;//grados
var relacionAspecto=window.innerWidth/window.innerHeight;
var planocercano=1;
var planoLejano=1000;

var camara= new THREE.PerspectiveCamera(campoVision,relacionAspecto,planocercano,planoLejano);
camara.position.z=15;

for(var i=0; i<3;i++){

var cubo= new THREE.Mesh(    new THREE.BoxGeometry(2,2,2),
                         new THREE.MeshNormalMaterial() );
   }

  
cubo.position.x=-5;


var escena =  new THREE.Scene();
escena.add(cubo);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
