var forma = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({color: '#00cc00'});
malla =new THREE.Mesh(forma,material);

escena= new THREE.Scene();
escena.add(malla);
camara= new THREE.PerspectiveCamera();
camara.position.z=5;

renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);


function setup(){
var forma= new THREE.BoxGeometry(1,1,1);
var material=new THREE.MeshLamberMaterial({color: '#ffffff'});
malla = new THREE.Mesh(forma,material);
var luzPuntual=new  THREE.PointLight(0XCC00CC);
luzPuntual.position.x =10;
luzPuntual.position.y =10;
luzPuntual.position.z =10;
escena=new THREE.Scene();
escena.add(malla);
escena.add(luzPuntual);
camara = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

}

function loop(){
requestAnimationFrame(loop);
malla.rotation.x+=.01;
malla.rotation.y+=.01;

renderer.render(escena.camara);
}

var camara,escena, renderer, malla;

setup();
loop();
