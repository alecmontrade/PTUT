class VilleBehavior extends Sup.Behavior {
speed=0.05;

idTxtPassant=1;
maxTxtPassant=1;
  
  
  
  actors: Sup.Actor[] = [];
  
  awake() {
    // We get and store all the bodies in two arrays, one for each group
    
    let Actors = Sup.getActor("Acteurs").getChildren();
    for (let actor of Actors) this.actors.push(actor);
  }
  
  
  update() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
    Sup.getActor("dialogue").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX(),Sup.getActor("Hero").getY()-3));
    //Sup.getActor("dialogue").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX(),Sup.getActor("Hero").getY()-3));

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
    
   
    if(this.actor.getX()>=(Sup.getActor("Passant").getX())-1 && this.actor.getX()<=(Sup.getActor("Passant").getX())+1 && this.actor.getY()>=(Sup.getActor("Passant").getY())-1 && this.actor.getY()<=(Sup.getActor("Passant").getY())+1){
       Sup.getActor("txt0").setVisible(false);
       Sup.getActor("dialogue").setVisible(true); 
       //Sup.getActor("proposition").setVisible(true);
       if(this.idTxtPassant!=0 && this.idTxtPassant<=this.maxTxtPassant){
         Sup.getActor("fond_texte").setVisible(true);
         Sup.getActor("DialoguePassant"+this.idTxtPassant).setVisible(true);
       
      
         if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
            
            this.idTxtPassant++;
            Sup.getActor("DialoguePassant"+(this.idTxtPassant-1)).setVisible(false);
           
            if(this.idTxtPassant>this.maxTxtPassant){
              
              
              
              this.idTxtPassant=1
            }

            
            Sup.getActor("fond_texte").setVisible(true);
            Sup.getActor("DialoguePassant"+this.idTxtPassant).setVisible(true);
            
            
           
            
          }
       }
      
       
     }
    else{
       
       Sup.getActor("proposition").setVisible(false);
      // Sup.getActor("dialogue").setVisible(false);
       for(let i=1;i<=this.maxTxtPassant;i++){
         Sup.getActor("DialoguePassant"+i).setVisible(false);
         
       }
       
       Sup.getActor("fond_texte").setVisible(false);
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
Sup.registerBehavior(VilleBehavior);
