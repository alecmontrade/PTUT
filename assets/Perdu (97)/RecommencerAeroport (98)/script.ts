class RecommencerAeroportBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    if(Sup.Input.wasKeyJustPressed("O",{autoRepeat:false})){
           Sup.log("autre map");  
           Sup.loadScene("MapAéroport/MapAeroport");
    }
  }
}
Sup.registerBehavior(RecommencerAeroportBehavior);
