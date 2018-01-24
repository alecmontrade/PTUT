class UIQCMBehavior extends UIButtonManagerBehavior {
  buttonAction(){
    switch(this.buttonIndex){
      case 0:
        Sup.log("reponse 1");
        break;
      case 1:
        Sup.log("reponse 2");
        break;
      case 2:
        Sup.log("reponse 3");
        break;
      default:
        break;
    
   }
  }
  
}
Sup.registerBehavior(UIQCMBehavior);​