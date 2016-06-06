// ====================================================================================================
//
// Cloud Code for module, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
//Global var to access the challenge we are dealing with
var challenge = Spark.getChallenge(Spark.data.challengeInstanceId);
//Global var to access the current deck
var deck = challenge.getPrivateData("deck");
//Global var to access the current hands
var hands = challenge.getScriptData("hands");
//Global var to access the current players hand
var currentPlayersHand = getCurrentPlayersHand(hands);

//Gets the current players hand out of the hands object
function getCurrentPlayersHand(hands){
  for(i=0 ; i<hands.length ; i++){
    if(hands[i].id == Spark.player.playerId){
        return hands[i];
    }
  }
}

//Method to determine whether the game is finished.
//we track a "complete" attribute against finished hands
function checkFinished(hands){
  var isFinished = true;

  for(i=0 ; i<hands.length ; i++){
    if(hands[i].complete){
        isFinished = isFinished && hands[i].complete;
    } else {
        isFinished = false;
    }
  }

  if(isFinished){
    calculateWinner();
  }
}

//Works out who has won by sorting by the hand score
function calculateWinner(){
  hands.sort(function(a,b){return a.score-b.score});

  var winner;

  for(i=0 ; i<hands.length ; i++){
    if(hands[i].score <= 21){
      winner = hands[i].id;
      break;
    }
  }

  if(winner){
    challenge.winChallenge(winner);
  } else {
    challenge.drawChallenge();
  }

}

//Calculates a score for a hand
function handGetScore(hand) {

  var i, total;

  total = 0;

  // Total card values counting Aces as one.

  for (i = 0; i < hand.length; i++)
    if (hand[i].rank == "A")
      total++;
    else {
      if (hand[i].rank == "J" || hand[i].rank == "Q" ||
          hand[i].rank == "K")
        total += 10;
      else
        total += parseInt(hand[i].rank, 10);
    }

  // Change as many ace values to 11 as possible.

  for (i = 0; i < hand.length; i++)
    if (hand[i].rank == "A" && total <= 11)
      total += 10;

  return total;
}