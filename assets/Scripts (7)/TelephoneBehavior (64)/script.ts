class TelephoneBehavior extends Sup.Behavior {
  idNum = 1;
  
  awake() {
    
  }

  update() {
    
    if(Sup.Input.wasMouseButtonJustReleased(0)) {
       
       Sup.log(Sup.Input.getMousePosition().x);
         Sup.log(Sup.Input.getMousePosition().y);
      if (Sup.Input.getMousePosition().x < 0.212  && Sup.Input.getMousePosition().x > -0.256 &&  -0.106> Sup.Input.getMousePosition().y && Sup.Input.getMousePosition().y>-0.712){
         
        Sup.getActor("numero"+this.idNum).setVisible(true);
         this.idNum++;
       
     }
  }
       
  }
  
}
Sup.registerBehavior(TelephoneBehavior);
