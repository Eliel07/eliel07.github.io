var reina = new THREE.Shape();

reina.moveTo(0, 0);
reina.lineTo(0, 2);
reina.lineTo(2,2);
reina.lineTo(2, 15);
reina.lineTo(3, 11);
reina.lineTo(4, 12);
reina.lineTo(5, 11);
reina.lineTo(6, 16);
reina.lineTo(7, 11);
reina.lineTo(8, 12);
reina.lineTo(9, 11);
reina.lineTo(10,15);
reina.lineTo(10, 2);
reina.lineTo(12, 2);
reina.lineTo(12, 0);
reina.lineTo(0, 0);

var forma = new THREE.ExtrudeGeometry( reina,
                                       {amount: 1} );
                                       
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
//malla.rotateY( Math.PI/4 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z =60;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
