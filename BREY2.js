var puntos1 = [];
for ( var i = 0; i <=22; i ++ ) {
if(i<=6){
    puntos1.push( new THREE.Vector2(i,0));
}
if(i==7){
    puntos1.push( new THREE.Vector2(6,-2));
}
if(i==8){
    puntos1.push( new THREE.Vector2(0,-2));
}

}

var forma = new THREE.LatheGeometry(puntos1);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );


var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 60;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
