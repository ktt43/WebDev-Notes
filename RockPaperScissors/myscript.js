//Test Random selection from opponent
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
    console.log(playerSelection + ":" + opponentSelection);
    let result;
    let playerHand = numberToSelection(playerSelection);
    let compHand = numberToSelection(opponentSelection);
    if(playerSelection == opponentSelection){
        result = "Draw!" + " Player: " + playerHand + " Computer: " + compHand; 
    }  else if(playerSelection == 0 && opponentSelection == 2){
        result = "Player Win!" + " Player: " + playerHand + " Computer: " + compHand;
    } else if(playerSelection == 2 && opponentSelection == 0){
        result = "Computer Win!" + " Player: " + playerHand + " Computer: " + compHand;
        
    }else if(playerSelection>opponentSelection){
        result = "Player Win!" + " Player: " + playerHand + " Computer: " + compHand;
    } else {
        result = "Computer Win!" + " Player: " + playerHand + " Computer: " + compHand;
    }
    
    document.getElementById("result").innerHTML= result;
}
