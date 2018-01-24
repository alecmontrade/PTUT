class AeroportBehavior extends Sup.Behavior {
speed=0.05;
  
  
  
  
  actors: Sup.Actor[] = [];
  
  awake() {
    
  }
  
  
  update() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
    Sup.getActor("dialogue").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX(),Sup.getActor("Hero").getY()-3));

    let x=0,y=0,key="down";
    if(Sup.Input.isKeyDown("UP")){
      key="up";
      y=this.speed;
      
    }
    if(Sup.Input.isKeyDown("DOWN")){
      key="down";
      y=-this.speed;
    }
    if(Sup.Input.isKeyDown("RIGHT")){
      key="right";
      x=this.speed;
    }
    if(Sup.Input.isKeyDown("LEFT")){
      key="left";
      x=-this.speed
    }
    this.move(x,y,key);
    
   
    
   for (let personnages of this.actors){ 
     if(this.actor.getX()>=(personnages.getX())-1 && this.actor.getX()<=(personnages.getX())+1 && this.actor.getY()>=(personnages.getY())-1 && this.actor.getY()<=(personnages.getY())+1){
       
        if(Sup.Input.isKeyDown("SPACE")){
         
          Sup.getActor("fond_texte").setVisible(true);
          Sup.getActor("text").setVisible(true);
          Sup.getActor("text2").setVisible(true);
          
            
        }
       
      }
     
   }
    
    if(Sup.Input.wasKeyJustPressed("SPACE",{autoRepeat:false})){
         
          Sup.getActor("fond_texte").setVisible(false);
          Sup.getActor("txt1").setVisible(false);
          
          
            
    }
    
    
      
   
    
  }
  
  getCollision(x,y){
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies());
    this.actor.arcadeBody2D.setVelocity(new Sup.Math.Vector2(x,y));
  }
  
  
  move(x,y,key){
    if(x!=0 || y!=0){
      this.actor.spriteRenderer.setAnimation("move_"+key);
      this.getCollision(x,y);
    }
  
  else{
    this.actor.spriteRenderer.setAnimation("idle");
    this.getCollision(0,0);
    }
  }
}
Sup.registerBehavior(AeroportBehavior);
