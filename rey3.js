var puntos = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=4){
    puntos.push( new THREE.Vector2(i,16));
}
if(i==5){
    puntos.push( new THREE.Vector2(2,11));
}
if(i==6){
    puntos.push( new THREE.Vector2(4,9));
}
if(i==7){
    puntos.push( new THREE.Vector2(4,8));
}

if(i==8){
    puntos.push( new THREE.Vector2(2,8));
}
if(i==9){
    puntos.push( new THREE.Vector2(4,0));
}
    if(i==10){
    puntos.push( new THREE.Vector2(0,0));
}

}

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/7 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 70;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
