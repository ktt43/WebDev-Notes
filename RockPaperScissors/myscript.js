//Test Random selection from opponent
let playerWinCount=0;
let compWinCount=0;

function computerPlay(){
    //0: Paper, 1: Scissor ,2: Rock
    let result =  Math.floor(Math.random() * 3);
    return result;
}


// Returns Integer(0:Paper ; 1:Scissor ; 2:Rock) from Selected Button
function playerSelection(selection){
    let playerSelection;
   switch(selection){
       case "selectPaper": playerSelection= 0; break;
       case "selectScissors": playerSelection= 1; break;
       case "selectRock": playerSelection= 2; break;
       default: console.log("default"); break;
   }

   gameLogic(playerSelection,computerPlay());
}

//Rock(2)>Scissor(1)>Paper(0)>rock
function numberToSelection(x){
    switch(x){
        case 0: return "paper"; break;
        case 1: return "scissor"; break;
        case 2: return "rock"; break;
        default: console.log("default"); break;
    }
}

function gameLogic(playerSelection,opponentSelection){
    // console.log(playerSelection + ":" + opponentSelection);
    let result;
    let playerHand = numberToSelection(playerSelection);
    let compHand = numberToSelection(opponentSelection);
    if(playerSelection == opponentSelection){
        result = "Draw!" + " Player: " + playerHand + " Computer: " + compHand; 
    
    }  else if(playerSelection == 0 && opponentSelection == 2){
        result = "Player Win!" + " Player: " + playerHand + " Computer: " + compHand;
        ++playerWinCount;
    } else if(playerSelection == 2 && opponentSelection == 0){
        result = "Computer Win!" + " Player: " + playerHand + " Computer: " + compHand;
        ++compWinCount;
    }else if(playerSelection>opponentSelection){
        result = "Player Win!" + " Player: " + playerHand + " Computer: " + compHand;
        ++playerWinCount;
    } else {
        result = "Computer Win!" + " Player: " + playerHand + " Computer: " + compHand;
        ++compWinCount;
    }

    document.getElementById("playerWins").innerHTML=playerWinCount;
    document.getElementById("playerLosts").innerHTML=compWinCount;
    
    
    document.getElementById("result").innerHTML= result;
    gameWinLogic();
}

function gameWinLogic(){
    if(playerWinCount == 5){
        ask("You Won! \nPlay Again?",rematch())
    } else if(compWinCount==5){
        ask("You Lost! \nRematch?",rematch());
    }
}

function ask(question,yes){
    if(alert(question)){
        yes()
    }
}

function rematch(){
    playerWinCount=0;
    compWinCount=0;
    result=" ";
    document.getElementById("playerWins").innerHTML=playerWinCount;
    document.getElementById("playerLosts").innerHTML=compWinCount;
    document.getElementById("result").innerHTML= result;
}