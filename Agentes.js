function Agent(x=0,y=0){
      THREE.Object3D.call(this);
      this.position.x=x;
      this.position.y=y;
}

Agent.prototype=new THREE.Object3D();
Agent.prototype.sense= function(evironment){};
Agent.prototype.plan= function(evironment){};
Agent.prototype.act= function(evironment){};

function Environment(){
    THREE.Scene.call(this);
    }

Environment.prototype= new THREE.Scene();
//La interfaz entre el entorno y los agentes estará dada por los siguientes métodos:    
Environment.prototype.sense=function(){
    for(var i=0; i<this.children.length; i++){
    if(this.children[i].sense !==undefined)
            this.children[i].sense(this);
    
    }
}

Environment.prototype.plan=function(){
    for(var i=0; i<this.children.length; i++){
    if(this.children[i].plan !==undefinded)
            this.children[i].plan(this);
    }
}

Environment.prototype.plan=function(){
    for(var i=0; i<this.children.length; i++){
    if(this.children[i].act !==undefinded)
            this.children[i].act(this);
    }
}


function Pelota(r, x=0, y=0){
    Agent.call(this,x,y);
    this.add(new THREE.Mesh( new THREE.SphereGeometry(r),
                             new THREE.MeshNormalMaterial()));
    this.step= 0.1;
    this.colision=0;
    this.radius=r;
    this.sensor= new THREE.Raycaster( this.position,
                                      new THREE.Vector3(1,0,0));
 }
 
 //El prototipo de una pelota es un agente
 Pelota.prototype= new Agent();
 
 //se definen los metodos sense() y act() del agente PELOTA. Una pelota no planifica, asi que no se
 
 Pelota.prototype.sense= function(enviroment){
      this.sensor.set( this.position, new THREE.Vector3(1,0,0));
      var obstaculo1 = this.sensor.intersectObjects(environment.children,   
                                                     true);
                                                     
      this.sensor.set( this.position, new THREE.Vector3(-1,0,0));
      var obstaculo2 = this.sensor.intersectObjects(environment.children,   
                                                     true);
      if((obstaculo1.length> 0 &&
        (obstaculo[0].distance<= this.radius)) ||
        (obstaculo2.length> 0 &&
        (obstaculo2.[0].distance <= this.radius)  ))
            this.colision=1;
      else 
            this.colision=0;
};

Pelota.prototype.act= function(environment){
          if (this.colision===1)
              this.step=-this.step;
          this.position.x += this.step;
};

function pared(size,x=0,y=0){
    THREE.Object3D.call(this,x,y);
    
    this.add(new THREE.Mesh( new THREE.BoxGeometry(size,size,size ),
                             new THREE.MeshNormalMaterial()));

    this.size= size;
    this.position.x=x;
    this.position.y=y;
}

Pared.prototype= new THREE.Object3D();
//El programa principal queda muy simple

function setup(){
    entorno= new Environment();
    camara= new THREE.PerspectiveCamera();
    camara.position.z=30;
    
    entorno.add( new Pared(1,7,0) );
    entorno.add( new Pared(1,-7,0) );
    entorno.add( new Pared(1,7,1) );
    entorno.add( new Pared(1,-7,1) );
    entorno.add( new Pared(1,7,-1) );
    entorno.add( new Pared(1,-7,-1) );
    entorno.add( new Pelota(0.5) );
    entorno.add(camara);
    
renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderer.domElement );
}

function loop(){
     requestAnimationFrame( loop );
     
     entorno.sense();
     entorno.plan();
     entorno.act();
     renderer.render( entorno, camara );
}

var entorno, camara, renderer;

setup();
loop();
