var puntos = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=1){     puntos.push( new THREE.Vector2(i,16));}
if(i==2){    puntos.push( new THREE.Vector2(1,18));}
if(i==3){    puntos.push( new THREE.Vector2(3,18));}
if(i==4){    puntos.push( new THREE.Vector2(3,20));}
if(i==5){    puntos.push( new THREE.Vector2(1,20));}
if(i==6){   puntos.push( new THREE.Vector2(1,22));}
    if(i==7){    puntos.push( new THREE.Vector2(0,22));}
      if(i==8){    puntos.push( new THREE.Vector2(0,16));}
    }

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );


var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 70;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
