class RandomMoveBehavior extends Sup.Behavior {
  speed=0.05;
  
  update() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
     let x=0,y=0,key="down",rand=0,sleep=0,i=0;
    
    rand=Sup.Math.Random.integer(1,10);
    sleep=Sup.Math.Random.integer(1,60);
    if(sleep==5){
      if(rand==1){
        key="up";
        y=this.speed;

      }
      if(rand==2){
        key="down";
        y=-this.speed;
      }
      if(rand==3){
        key="right";
        x=this.speed;
      }
      if(rand==4){
        key="left";
        x=-this.speed
      }
      else{
        
      }
      for(let i=0;i<2;i++){
        if( this.actor.arcadeBody2D.getTouches().top==false && this.actor.arcadeBody2D.getTouches().left==false && this.actor.arcadeBody2D.getTouches().right==false && this.actor.arcadeBody2D.getTouches().bottom==false){
          this.move(x,y,key);
        }
      }
      
  }
    
    
    
  }
  getCollision(x,y){
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies());
    this.actor.arcadeBody2D.setVelocity(new Sup.Math.Vector2(x,y));
  }
  
  move(x,y,key){
    
    
    if((x!=0 || y!=0) && this.actor.arcadeBody2D.getTouches().top==false && this.actor.arcadeBody2D.getTouches().left==false && this.actor.arcadeBody2D.getTouches().right==false && this.actor.arcadeBody2D.getTouches().bottom==false){
      Sup.log("je bouge");
      this.actor.spriteRenderer.setAnimation("move_"+key);
      
      this.getCollision(x,y);
    }
    else{
      this.actor.spriteRenderer.setAnimation("idle");
      this.getCollision(0,0);
    }
  

  }
}
Sup.registerBehavior(RandomMoveBehavior);