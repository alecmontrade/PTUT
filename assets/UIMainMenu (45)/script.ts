class UIMainMenuBehavior extends UIButtonManagerBehavior {
  
  buttonAction(){
    switch(this.buttonIndex){
      case 0:
        Sup.loadScene("description");
        
        break;
      default:
        break;
    
   }
  }
  
}
Sup.registerBehavior(UIMainMenuBehavior);

