class TextFieldBehavior extends Sup.Behavior {
  idQuest=1;
  text = "";

  private font: Sup.Font;
  private column = 0;
  private cursorActor: Sup.Actor;
  private cursorWidth: number;
  private blinkTimer = 0;
  static blinkDuration = 20;
  
  awake() {
    this.font = this.actor.textRenderer.getFont();
    
    this.actor.textRenderer.setText(this.text);
    this.column = this.text.length;
    this.cursorActor = this.actor.getChild("Cursor");
    this.cursorActor.textRenderer.setOpacity(0.5);
    this.cursorWidth = this.font.getTextWidth("|");
  }

  update() {

    let textEntered = Sup.Input.getTextEntered();
    if (textEntered.length > 0) {
      for (let character of textEntered) {
        this.text = this.text.substring(0, this.column) + character + this.text.substring(this.column);
        this.column++;
      }
      this.refresh();
    }
    

    if (Sup.Input.wasKeyJustPressed("BACK_SPACE", { autoRepeat: true })) {
      this.text = this.text.substring(0, this.column - 1) + this.text.substring(this.column);
      this.column = Math.max(0, this.column - 1);
      this.refresh();
    }

    if (Sup.Input.wasKeyJustPressed("DELETE", { autoRepeat: true })) {
      this.text = this.text.substring(0, this.column) + this.text.substring(this.column + 1);
      this.refresh();
    }
    

    if (Sup.Input.wasKeyJustPressed("LEFT", { autoRepeat: true })) { this.column = Math.max(0, this.column - 1); this.refresh(); }
    if (Sup.Input.wasKeyJustPressed("RIGHT", { autoRepeat: true })) { this.column = Math.min(this.text.length, this.column + 1); this.refresh(); }
    if (Sup.Input.wasKeyJustPressed("HOME", { autoRepeat: true })) { this.column = 0; this.refresh(); }
    if (Sup.Input.wasKeyJustPressed("END", { autoRepeat: true })) { this.column = this.text.length; this.refresh(); }
    

    this.blinkTimer++;
    if (this.blinkTimer === TextFieldBehavior.blinkDuration) {
      this.blinkTimer = 0;
      this.cursorActor.setVisible(!this.cursorActor.getVisible());
    }
    
    
    
    Sup.getActor("Question"+this.idQuest).setVisible(true);
    if(Sup.Input.wasKeyJustPressed("RETURN",{autoRepeat: false})){
        
        //question 1
        
        if("Question"+this.idQuest=="Question1"&&this.text=="reserve"||this.text=="Reserve"||this.text=="RESERVE"||this.text=="book"||this.text=="Book"||this.text=="BOOK"){      
          let player = Sup.Audio.playSound("Dialogue1"); 
          player.play();
          this.text="";
            Sup.getActor("Question"+this.idQuest).setVisible(false);
            Sup.getActor("Faux").setVisible(false)
            this.idQuest=this.idQuest+1;
            player.stop();
            this.refresh();
          }
      
      //question 2
        
        else if("Question"+this.idQuest=="Question2"&&this.text=="Booked"||this.text=="booked"||this.text=="BOOKED"){
            this.text="";
            Sup.getActor("Question"+this.idQuest).setVisible(false);
            Sup.getActor("Faux").setVisible(false)
            this.idQuest=this.idQuest+1;
            this.refresh();
          }
      
      //question 3
        
        else if("Question"+this.idQuest=="Question3"&&this.text=="full"||this.text=="Full"||this.text=="FULL"){
            this.text="";
            Sup.getActor("Question"+this.idQuest).setVisible(false);
            Sup.getActor("Faux").setVisible(false)
            this.idQuest=this.idQuest+1;
            this.refresh();
          }
      
      //question 4
        
        else if("Question"+this.idQuest=="Question4"&&this.text=="booking"||this.text=="Booking"||this.text=="BOOKING"){
            this.text="";
            Sup.getActor("Question"+this.idQuest).setVisible(false);
            Sup.getActor("Faux").setVisible(false)
            this.idQuest=this.idQuest+1;
            this.refresh();
          }
      
      //question 5
        
        else if("Question"+this.idQuest=="Question5"&&this.text=="Hold"||this.text=="hold"||this.text=="HOLD"||this.text=="Keep"||this.text=="keep"||this.text=="KEEP"){
            this.text="";
            Sup.getActor("Question"+this.idQuest).setVisible(false);
            Sup.getActor("Faux").setVisible(false)
            this.idQuest=this.idQuest+1;
            this.refresh();
          }
      
      //question 6
        
        else if("Question"+this.idQuest=="Question6"&&this.text=="deposit"||this.text=="Deposit"||this.text=="DEPOSIT"){
            this.text="";
            Sup.getActor("Question"+this.idQuest).setVisible(false);
            Sup.getActor("Faux").setVisible(false)
            this.idQuest=this.idQuest+1;
            this.refresh();
          }
      
          else{
            this.text="";
            Sup.getActor("Faux").setVisible(true);
            this.refresh();
          }
     }
    
    
  }

  refresh() {
    this.blinkTimer = 0;
    this.cursorActor.setVisible(true);

    this.actor.textRenderer.setText(this.text);
    let offset = this.font.getTextWidth(this.text.substring(0, this.column));
    if (this.actor.textRenderer.getAlignment() === "center") offset -= this.font.getTextWidth(this.text) / 2;
    this.cursorActor.setLocalX(offset - this.cursorWidth / 2);
    
    
  }

}
Sup.registerBehavior(TextFieldBehavior);
