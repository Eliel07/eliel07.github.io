var reina = new THREE.Shape();

figura.moveTo(0, 0);
figura.lineTo(0, 2);
figura.lineTo(2,2);
figura.lineTo(2, 15);
figura.lineTo(3, 11);
figura.lineTo(4, 12);
figura.lineTo(5, 11);
figura.lineTo(6, 16);
figura.lineTo(7, 11);
figura.lineTo(8, 12);
figura.lineTo(9, 11);
figura.lineTo(10,15);
figura.lineTo(10, 2);
figura.lineTo(12, 2);
figura.lineTo(12, 0);
figura.lineTo(0, 0);

var forma = new THREE.ExtrudeGeometry( reina,
                                       {amount: 5} );
                                       
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/4 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z =60;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
