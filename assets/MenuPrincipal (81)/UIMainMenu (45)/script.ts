class UIMainMenuBehavior extends UIButtonManagerBehavior {
  
  buttonAction(){
    switch(this.buttonIndex){
      case 0:
        Sup.loadScene("DescriptionJeu/description");
        
        break;
      default:
        break;
    
   }
  }
  
}
Sup.registerBehavior(UIMainMenuBehavior);

