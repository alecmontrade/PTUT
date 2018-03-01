class FinAeroportBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
           Sup.log("autre map");  
           Sup.loadScene("MapVille/MapVille");
    }
  }
}
Sup.registerBehavior(FinAeroportBehavior);
