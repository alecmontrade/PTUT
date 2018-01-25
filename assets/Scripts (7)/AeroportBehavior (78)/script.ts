class AeroportBehavior extends Sup.Behavior {
speed=0.05;
idTxt=1;
maxTxt=2;
chronometre=0;
vueHotesse=0;
vueBagages=0;
  actors: Sup.Actor[] = [];
  
  awake() {
    let Actors = Sup.getActor("Acteurs").getChildren();
    for (let actor of Actors) this.actors.push(actor);
  }
  
  
  update() {
    this.chronometre++;
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
    
   
    
    
     if(this.actor.getX()>=(Sup.getActor("Hotesse").getX())-1 && this.actor.getX()<=(Sup.getActor("Hotesse").getX())+1 && this.actor.getY()>=(Sup.getActor("Hotesse").getY())-1 && this.actor.getY()<=(Sup.getActor("Hotesse").getY())+1){
       Sup.getActor("txt0").setVisible(false);
       Sup.getActor("dialogue").setVisible(true); 
       Sup.getActor("proposition").setVisible(true);
       if(this.idTxt!=0 && this.idTxt<=this.maxTxt){
         Sup.getActor("fond_texte").setVisible(true);
         Sup.getActor("txt"+this.idTxt).setVisible(true);
       
      
         if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
            Sup.log(this.idTxt);
            this.idTxt++;
            Sup.getActor("txt"+(this.idTxt-1)).setVisible(false);
            if(this.idTxt>this.maxTxt){
              this.idTxt=1
            }

            
            Sup.getActor("fond_texte").setVisible(true);
            Sup.getActor("txt"+this.idTxt).setVisible(true);
            
            this.vueHotesse=1;
           
            
          }
       }
      
       
     }
     
        else if(this.actor.getX()>=(Sup.getActor("Bagages").getX())-2 && this.actor.getX()<=(Sup.getActor("Bagages").getX())+2 && this.actor.getY()>=(Sup.getActor("Bagages").getY())-2 && this.actor.getY()<=(Sup.getActor("Bagages").getY())+2){
        Sup.getActor("proposition").setVisible(true);
       

      
         if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
            
            this.vueBagages=1;

          }
       
       
      }
     else{
       
       Sup.getActor("proposition").setVisible(false);
      // Sup.getActor("dialogue").setVisible(false);
       for(let i=1;i<=this.maxTxt;i++){
         Sup.getActor("txt"+i).setVisible(false);
         
       }
       Sup.getActor("fond_texte").setVisible(false);
     }
     
   
    
    
    
    
      
   if(this.vueBagages+this.vueHotesse==2){
     Sup.log("niveau terminé");
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