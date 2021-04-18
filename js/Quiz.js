class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.input.hide;
    this.button.hide;
    this.title.hide;

    //write code to change the background color here
    background(77, 234, 242);
  
    //write code to show a heading for showing the result of Quiz
    this.title.html("My Result of the Quiz");
    this.title.position(350, 0);

    //call getContestantInfo( ) here
    if (allContestants !== undefined) {
      fill ("Blue");
      text("NOTE: Contestants who answered correct are highlighted in green color!", 130, 230);
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}3 
  