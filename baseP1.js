var figura = new THREE.Shape();

figura.moveTo(-70, -50);
figura.lineTo(-70, -40);
figura.lineTo(50, -40);
figura.lineTo(50, -50);
figura.lineTo(-70, -50);
var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 100} );
                                       
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/4 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z =250;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
