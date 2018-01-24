class CameraBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    this.actor.setLocalPosition(Sup.getActor("Hero").getLocalPosition().toVector2());
  }
}
Sup.registerBehavior(CameraBehavior);
