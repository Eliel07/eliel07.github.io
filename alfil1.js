var puntos = [];
for ( var i = 0; i <=22; i ++ ) {
if(i<=6){
    puntos.push( new THREE.Vector2(i,10-i));
}
if(i==7){
    puntos.push( new THREE.Vector2(i-1,10-i));
}
if(i>7&&i<=11){
    puntos.push( new THREE.Vector2(14-i,10-i));
}
if(i>12&&i<=15){
    puntos.push( new THREE.Vector2(2,10-i));
}
if(i>15&&i<=17){
    puntos.push( new THREE.Vector2(i-13,10-i));
}
if(i>17){
    puntos.push( new THREE.Vector2(22-i,-8));
}
}

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 40;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
