var dice1;
var dice2;
var score1 =0;
var score2 =0;
let counter=4;
let endgame =false



function setup() {
  createCanvas(400, 400);
  dice1 = new Dice(40, 40, 70, "Dice 1");
  dice2 = new Dice(120, 40, 70, "Dice 2");
  dice3 = new Dice(200,40,70,"Dice 3");
  dice4 = new Dice(280,40,70,"Dice 4");
  
  
  
  
}



 function draw() {
  background(50,950,900);
  dice1.drawdice();
  dice2.drawdice();
  dice3.drawdice();
  dice4.drawdice();
  dice1.roll();
  dice2.roll();
  dice3.roll();
  dice4.roll();
   game();
   
 
 }

function game(){
 noLoop()
  var playerScore = (dice1.diceValue + dice2.diceValue+dice3.diceValue + dice4.diceValue)
  textSize(20)
  text("Rolls Remaining = "+counter,105,320);
  console.log(playerScore);
   text("Score = "+ playerScore,150,380)
  
 if(playerScore === 0, counter ===4){text ("Can you get a score above 15? good luck!",10,280);}
                        
  else if(counter===0,playerScore <1, playerScore <15 ) {text ("Better luck next time!",150,280);}
  
  
  if(playerScore > 14){text("You Win!!",150,280)
                                    let endgame=true;}loop()}
  
  

class Dice{

  constructor(xPos, yPos, size, diceName,score){
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = size;
    this.diceName = diceName;
    this.diceValue = 0;
    this.dotSize = size * 0.2;this.button = createButton(this.diceName);
  this.button.position(this.xPos+10, this.yPos + (this.size + 10)); }

    roll(){ this.button.mousePressed(()=>{
          this.diceValue = floor(random(1,7));
      
      
      
      
          console.log(`${this.diceName} rolled a ${this.diceValue}`);}) }
    
  

  
 drawdice(){ noLoop()
    strokeWeight(this.dotSize * 0.3);
    rect(this.xPos, this.yPos, this.size, this.size , 20, 20);

   //---------------1
    if(this.diceValue === 1){
      strokeWeight(this.dotSize);
      point(this.xPos + (this.size * 0.5), this.yPos + (this.size * 0.5));
    }
   
   //------------2
   if(this.diceValue === 2){
      strokeWeight(this.dotSize);
      point(this.xPos-20 + (this.size * 0.5), this.yPos + (this.size * 0.5));
     point(this.xPos+20 + (this.size * 0.5), this.yPos + (this.size * 0.5));
    }
   
   //------------3
   if(this.diceValue === 3){
      strokeWeight(this.dotSize);
      point(this.xPos-20 + (this.size * 0.5), this.yPos + (this.size * 0.5));
     point(this.xPos+20 + (this.size * 0.5), this.yPos + (this.size * 0.5));
     point(this.xPos + (this.size * 0.5), this.yPos + (this.size * 0.5));}
     
   //----------4
     if(this.diceValue === 4){
      strokeWeight(this.dotSize);
      point(this.xPos-18 + (this.size * 0.5), this.yPos+18 + (this.size * 0.5));
     point(this.xPos+18 + (this.size * 0.5), this.yPos+18 + (this.size * 0.5));
       point(this.xPos-18 + (this.size * 0.5), this.yPos-18 + (this.size * 0.5));
     point(this.xPos+18 + (this.size * 0.5), this.yPos-18 + (this.size * 0.5));}
    
   //-----------5
   if(this.diceValue === 5){
      strokeWeight(this.dotSize);
      point(this.xPos-18 + (this.size * 0.5), this.yPos+18 + (this.size * 0.5));
     point(this.xPos+18 + (this.size * 0.5), this.yPos+18 + (this.size * 0.5));
       point(this.xPos-18 + (this.size * 0.5), this.yPos-18 + (this.size * 0.5));
     point(this.xPos+18 + (this.size * 0.5), this.yPos-18 + (this.size * 0.5));
   point(this.xPos + (this.size * 0.5), this.yPos + (this.size * 0.5));}
 
   //-------------6
   if(this.diceValue === 6){
      strokeWeight(this.dotSize);
      point(this.xPos-18 + (this.size * 0.5), this.yPos+18 + (this.size * 0.5));
     point(this.xPos+18 + (this.size * 0.5), this.yPos+18 + (this.size * 0.5));
       point(this.xPos-18 + (this.size * 0.5), this.yPos-18 + (this.size * 0.5));
     point(this.xPos+18 + (this.size * 0.5), this.yPos-18 + (this.size * 0.5));
  point(this.xPos-18 + (this.size * 0.5), this.yPos+  (this.size * 0.5));
     point(this.xPos+18 + (this.size * 0.5), this.yPos + (this.size * 0.5));}
loop() }
}

function mouseClicked()
{
  counter-=1
  if (endgame === true){
    createButton("Go again!",150,90)
      buttonPressed(playerScore =0,counter =4)
                         }
}
  
