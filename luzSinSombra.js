var iluminacion =  new THREE.PointLight(0xFFFFFF);
iluminacion.position.y=20;

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLamberMaterial({color: "#00cc00"});
var malla = new THREE.Mesh(forma,material);
malla.position.y=2;

vas base = new THREE.Mesh( new THREE.BoxGeometry(5,.1,5),
                           new THREE.MeshLambertMaterial(
                           {color:0xFFFFFF}));

var escena = new THREE.Scene();
escena.add(malla);
escenal.add(base);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=5;

var lienzo= document.getElementById("luzSinSombras");
var forma = new THREE.WebGLRenderer();
renderizador.setSize(600,600);
renderizador.render(escena,camara);

