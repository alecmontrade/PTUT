class AeroportBehavior extends Sup.Behavior {
speed=0.05;
idTxtHotesse=1;
idTxtBagages=1;
idTxtSecurite=1;
maxTxtSecurite=1;

maxTxtHotesse=2;
maxTxtBagages=2;

compteurVisuble=false;
chronometre=0;
vueHotesse=0;
vueBagages=0;
vueSecurite=0;
dixsecondes=0;
secondes=0;
minutes=0;
  
  awake() {
   Sup.getActor("Cadre").setVisible(false);
    Sup.getActor("NumerosM1").setVisible(false);
    Sup.getActor("NumerosM2").setVisible(false);
    Sup.getActor("2point").setVisible(false);
    Sup.getActor("NumerosM").setVisible(false);
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
       if(this.idTxtHotesse!=0 && this.idTxtHotesse<=this.maxTxtHotesse){
         Sup.getActor("fond_texte").setVisible(true);
         Sup.getActor("DialogueHotesse"+this.idTxtHotesse).setVisible(true);
       
      
         if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
            
            this.idTxtHotesse++;
            Sup.getActor("DialogueHotesse"+(this.idTxtHotesse-1)).setVisible(false);
           
            if(this.idTxtHotesse>this.maxTxtHotesse){
              if(this.compteurVisuble==false){
                Sup.getActor("Cadre").setVisible(true);
                Sup.getActor("NumerosM1").setVisible(true);
                Sup.getActor("NumerosM2").setVisible(true);
                Sup.getActor("2point").setVisible(true);
                Sup.getActor("NumerosM").setVisible(true);
                Sup.getActor("M2numero"+this.secondes).setVisible(false);
                Sup.getActor("M1numero"+this.dixsecondes).setVisible(false);
                Sup.getActor("Mnumero"+this.minutes).setVisible(false);
                this.secondes=0;
                this.dixsecondes=0;
                this.minutes=0;
                this.compteurVisuble=true;
              }
              
              
              this.idTxtHotesse=1
            }

            
            Sup.getActor("fond_texte").setVisible(true);
            Sup.getActor("DialogueHotesse"+this.idTxtHotesse).setVisible(true);
            
            this.vueHotesse=1;
           
            
          }
       }
      
       
     }
     
        else if(this.actor.getX()>=(Sup.getActor("Bagages").getX())-2 && this.actor.getX()<=(Sup.getActor("Bagages").getX())+2 && this.actor.getY()>=(Sup.getActor("Bagages").getY())-2 && this.actor.getY()<=(Sup.getActor("Bagages").getY())+2){
          Sup.getActor("dialogue").setVisible(true); 
          Sup.getActor("proposition").setVisible(true);
          if(this.idTxtBagages!=0 && this.idTxtBagages<=this.maxTxtBagages){
           Sup.getActor("fond_texte").setVisible(true);
           Sup.getActor("DialogueBagagiste"+this.idTxtBagages).setVisible(true);


           
           if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
               this.idTxtBagages++;
                Sup.getActor("DialogueBagagiste"+(this.idTxtBagages-1)).setVisible(false);
               Sup.log(this.idTxtBagages);
               if(this.idTxtBagages>this.maxTxtBagages){
                  this.idTxtBagages=1;
                 
               }
             

              
             

              Sup.getActor("fond_texte").setVisible(true);
              Sup.getActor("DialogueBagagiste"+this.idTxtBagages).setVisible(true);

              this.vueBagages=1;
               

            }
         }
       
      }
    
     else if(this.actor.getX()>=(Sup.getActor("Securite").getX())-2 && this.actor.getX()<=(Sup.getActor("Securite").getX())+2 && this.actor.getY()>=(Sup.getActor("Securite").getY())-2 && this.actor.getY()<=(Sup.getActor("Securite").getY())+2){
          Sup.getActor("dialogue").setVisible(true); 
          Sup.getActor("proposition").setVisible(true);
          if(this.idTxtSecurite!=0 && this.idTxtSecurite<=this.maxTxtSecurite){
           Sup.getActor("fond_texte").setVisible(true);
           Sup.getActor("DialogueSecurite"+this.idTxtSecurite).setVisible(true);


           
           if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
               this.idTxtSecurite++;
                Sup.getActor("DialogueSecurite"+(this.idTxtSecurite-1)).setVisible(false);
               Sup.log(this.idTxtSecurite);
               if(this.idTxtSecurite>this.maxTxtSecurite){
                  this.idTxtSecurite=1;
                 
               }
             

              
             

              Sup.getActor("fond_texte").setVisible(true);
              Sup.getActor("DialogueSecurite"+this.idTxtSecurite).setVisible(true);

              this.vueSecurite=1;
               

            }
         }
       
      }
    
    
     else{
       
       Sup.getActor("proposition").setVisible(false);
      // Sup.getActor("dialogue").setVisible(false);
       for(let i=1;i<=this.maxTxtHotesse;i++){
         Sup.getActor("DialogueHotesse"+i).setVisible(false);
         
       }
       for(let i=1;i<=this.maxTxtBagages;i++){
         Sup.getActor("DialogueBagagiste"+i).setVisible(false);
         
       }
       for(let i=1;i<=this.maxTxtSecurite;i++){
         Sup.getActor("DialogueSecurite"+i).setVisible(false);
         
       }
       Sup.getActor("fond_texte").setVisible(false);
     }
     
    
    
    //Sup.log(this.secondes)
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
      
       
    
    if(this.minutes>=1){
      Sup.loadScene("Perdu/PerduAeroport");
    }
    
    
      
   if(this.vueBagages+this.vueHotesse+this.vueSecurite==3){
     Sup.log("changement");
     Sup.loadScene("TransitionAeroport/Transition_Aeroport");
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
Sup.registerBehavior(AeroportBehavior);​