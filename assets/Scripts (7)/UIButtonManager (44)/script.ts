class UIButtonManagerBehavior extends Sup.Behavior {
  
  buttons: Sup.Actor[];
  buttonIndex: number=0;
  ray=new Sup.Math.Ray();

  
  start(){
    this.buttons=Sup.getActor("Buttons").getChildren();
    this.updateFocusedButton();
    
  }
  
  update() {
    this.keyNavigation();
    this.mouseNavigation();
  }
  
  keyNavigation(){
    if (Sup.Input.wasKeyJustPressed("DOWN", {autoRepeat: true})) {
      this.buttonIndex=Math.min(this.buttonIndex+1,this.buttons.length-1);
      this.updateFocusedButton();
    }
    if (Sup.Input.wasKeyJustPressed("UP", {autoRepeat: true})) {
      this.buttonIndex=Math.min(this.buttonIndex+1,this.buttons.length-1);
      this.updateFocusedButton();
    }
    if (Sup.Input.wasKeyJustPressed("RETURN")){
      this.buttonAction();
    }
  }
  
  mouseNavigation(){
    this.ray.setFromCamera(this.actor.camera, Sup.Input.getMousePosition());
    let hits=this.ray.intersectActors(this.buttons);
    if(hits.length>0){
      this.buttonIndex=this.buttons.indexOf(hits[0].actor);
      this.updateFocusedButton();
    }
    if(Sup.Input.wasMouseButtonJustPressed(0)){
      this.buttonAction();
    }
  }
  
  updateFocusedButton(){
    for(let i=0;i<this.buttons.length;i++){
      let button=this.buttons[i];
      button.textRenderer.setOpacity(i==this.buttonIndex ? 1:0.7);
    }
  }
  
  buttonAction(){
    
  }
  
}

