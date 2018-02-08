class TelephoneBehavior extends Sup.Behavior {
  idNum = 1;
  appel=false;
  i=1;
  
  awake() {
    
  }

  update() {
    
    if(Sup.Input.wasMouseButtonJustReleased(0)) {
       
       Sup.log(Sup.Input.getMousePosition().x);
         Sup.log(Sup.Input.getMousePosition().y);
      if (Sup.Input.getMousePosition().x < 0.5186  && Sup.Input.getMousePosition().x > 0.0589 &&  -0.0492> Sup.Input.getMousePosition().y && Sup.Input.getMousePosition().y>-0.6359){
         
        Sup.getActor("numero"+this.idNum).setVisible(true);
         this.idNum++;
      }
    }
    
    if(Sup.Input.wasMouseButtonJustReleased(0)) {
      if(Sup.Input.getMousePosition().x > 0.2524  && Sup.Input.getMousePosition().x < 0.3213 &&  -0.7100> Sup.Input.getMousePosition().y && Sup.Input.getMousePosition().y>-0.8181){
        Sup.getActor("Questions").setVisible(true);
        Sup.getActor("Appelencours").setVisible(true);
        Sup.getActor("TextField").setVisible(true);
        this.appel=true;
        let Player1 = new Sup.Audio.SoundPlayer("Dialogue"+this.i);
        Player1.play();
      }
    }
    
    if(this.appel==false){
      Sup.getActor("Questions").setVisible(false);
      Sup.getActor("TextField").setVisible(false);
    }
       
  }
  
}
Sup.registerBehavior(TelephoneBehavior);

​
