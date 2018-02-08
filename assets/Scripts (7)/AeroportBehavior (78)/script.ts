class AeroportBehavior extends Sup.Behavior {
speed=0.05;
idTxt=1;
maxTxt=2;

chronometre=0;
vueHotesse=0;
vueBagages=0;
  dixsecondes=0;
secondes=0;
minutes=0;
  
  awake() {
   
  }
  
  
  update() {
    
    
    Sup.getActor("Cadre").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX()-14.5,Sup.getActor("Hero").getY()-14.2));
    Sup.getActor("NumerosM1").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX()-12.6,Sup.getActor("Hero").getY()-15.75));
    Sup.getActor("NumerosM2").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX()-11.4,Sup.getActor("Hero").getY()-15.75));
    Sup.getActor("2point").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX()-14.4,Sup.getActor("Hero").getY()-14));
    Sup.getActor("NumerosM").setLocalPosition(new Sup.Math.Vector2(Sup.getActor("Hero").getX()-14.4,Sup.getActor("Hero").getY()-15.75));
    
    
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
     
    
    
    Sup.log(this.secondes)
    if(this.chronometre>60){
      this.secondes++;
      this.chronometre=0;
    }
    if(this.secondes==10){
      
      this.dixsecondes++;
      this.secondes=0;
    }
    if(this.dixsecondes==6){
      this.minutes++;
      this.dixsecondes=0;
    }
    
      switch(this.secondes){
      case 0:
        Sup.getActor("M2numero9").setVisible(false); 
        Sup.getActor("M2numero0").setVisible(true);       
        break;
      case 1:
        
        Sup.getActor("M2numero0").setVisible(false);
        Sup.getActor("M2numero1").setVisible(true);       
        break;
      case 2:
        Sup.getActor("M2numero1").setVisible(false);
        Sup.getActor("M2numero2").setVisible(true);       
        break;
      case 3:
        Sup.getActor("M2numero2").setVisible(false);
        Sup.getActor("M2numero3").setVisible(true);       
        break;
      case 4:
        Sup.getActor("M2numero3").setVisible(false);
        Sup.getActor("M2numero4").setVisible(true);       
        break;
      case 5:
        Sup.getActor("M2numero4").setVisible(false);
        Sup.getActor("M2numero5").setVisible(true);       
        break;
      case 6:
        Sup.getActor("M2numero5").setVisible(false);
        Sup.getActor("M2numero6").setVisible(true);       
        break;
      case 7:
        Sup.getActor("M2numero6").setVisible(false);
        Sup.getActor("M2numero7").setVisible(true);       
        break;
      case 8:
        Sup.getActor("M2numero7").setVisible(false);
        Sup.getActor("M2numero8").setVisible(true);       
        break;
      case 9:
        Sup.getActor("M2numero8").setVisible(false);
        Sup.getActor("M2numero9").setVisible(true);       
        break;
      
     
      default:
        break;
    
   }
       
   
      switch(this.dixsecondes){
      case 0:
        Sup.getActor("M1numero5").setVisible(false); 
        Sup.getActor("M1numero0").setVisible(true);       
        break;
      case 1:
        Sup.log("oui")
        Sup.getActor("M1numero0").setVisible(false);
        Sup.getActor("M1numero1").setVisible(true);       
        break;
      case 2:
        Sup.getActor("M1numero1").setVisible(false);
        Sup.getActor("M1numero2").setVisible(true);       
        break;
      case 3:
        Sup.getActor("M1numero2").setVisible(false);
        Sup.getActor("M1numero3").setVisible(true);       
        break;
      case 4:
        Sup.getActor("M1numero3").setVisible(false);
        Sup.getActor("M1numero4").setVisible(true);       
        break;
      case 5:
        Sup.getActor("M1numero4").setVisible(false);
        Sup.getActor("M1numero5").setVisible(true);       
        break;
      case 6:
        Sup.getActor("M1numero5").setVisible(false);
        Sup.getActor("M1numero6").setVisible(true);       
        break;
     
      default:
        break;
    
   }
    
    switch(this.minutes){
      case 0:
        Sup.getActor("Mnumero9").setVisible(false); 
        Sup.getActor("Mnumero0").setVisible(true);       
        break;
      case 1:
        
        Sup.getActor("Mnumero0").setVisible(false);
        Sup.getActor("Mnumero1").setVisible(true);       
        break;
      case 2:
        Sup.getActor("Mnumero1").setVisible(false);
        Sup.getActor("Mnumero2").setVisible(true);       
        break;
      case 3:
        Sup.getActor("Mnumero2").setVisible(false);
        Sup.getActor("Mnumero3").setVisible(true);       
        break;
      case 4:
        Sup.getActor("Mnumero3").setVisible(false);
        Sup.getActor("Mnumero4").setVisible(true);       
        break;
      case 5:
        Sup.getActor("Mnumero4").setVisible(false);
        Sup.getActor("Mnumero5").setVisible(true);       
        break;
      case 6:
        Sup.getActor("Mnumero5").setVisible(false);
        Sup.getActor("Mnumero6").setVisible(true);       
        break;
      case 7:
        Sup.getActor("Mnumero6").setVisible(false);
        Sup.getActor("Mnumero7").setVisible(true);       
        break;
      case 8:
        Sup.getActor("Mnumero7").setVisible(false);
        Sup.getActor("Mnumero8").setVisible(true);       
        break;
      case 9:
        Sup.getActor("Mnumero8").setVisible(false);
        Sup.getActor("Mnumero9").setVisible(true);       
        break;
      
     
      default:
        break;
    
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