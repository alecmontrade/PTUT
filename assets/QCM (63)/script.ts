class UIQCMBehavior extends UIButtonManagerBehavior {
  buttonAction(){
    switch(this.buttonIndex){
      case 0:
        Sup.log("Réponse 1");
        break;
      case 1:
        Sup.log("Réponse 2");
        break;
      case 2:
        Sup.log("Réponse 3");
        break;
      default:
        break;
    
   }
  }
  
}
Sup.registerBehavior(UIQCMBehavior);​