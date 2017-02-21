//Una aplicación 3D en THREE requiere de tres componente al menos. El primer componente es una escena, donde se disponen los objetos a visualizar.

var escena = new THREE.Scene();
//Luego se dispone de una cámara, la cual define la perspectiva con que se visualizará la escena.

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
//El último objeto requerido es un renderizador, el cual genera una imagen, considerando la iluminación y la perspectiva.

var renderer = new THREE.WebGLRenderer();
//Dependiendo de la aplicación, lo usual es ajustar el tamaño del renderizado. Una herramienta para ello es el objeto window, el cual es una interfaz a los atributos del navegador; por ejemplo sus dimensiones.

renderer.setSize( window.innerHeight*.9, window.innerHeight*.9 );
//Finalmente se inserta un lienzo (canvas) definido por el renderizador al documento. El objeto document es una interfaz a la estructura del documento y a su contenido.

document.body.appendChild( renderer.domElement );
renderer.render( escena, camara );

//Generación y visualización de un objeto^
var forma = new THREE.BoxGeometry( 1, 1, 1 );
var cubo  = new THREE.Mesh( forma );
cubo.rotation.x += 0.2;
cubo.rotation.y += 0.1;
escena.add( cubo );
renderer.render( escena, camara );
