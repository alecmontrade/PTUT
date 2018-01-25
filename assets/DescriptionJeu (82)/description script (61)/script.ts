class DescriptionScriptBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    if(Sup.Input.isKeyDown("O")){
           Sup.log("autre map");  
           Sup.loadScene("MapIUT/MapIUT2.0");
          }
  }
}
Sup.registerBehavior(DescriptionScriptBehavior);
