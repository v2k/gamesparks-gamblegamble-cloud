// ====================================================================================================
//
// Cloud Code for action_set_hand, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

require("dealer");


//Load challenge
var chal = Spark.getChallenge(Spark.getData().challengeInstanceId);

//Retrieve player stats
var playerStats = chal.getScriptData("playerStats");
//Retrieve player Id
var pId = Spark.getPlayer().getPlayerId();

// set top, mid, and bot
chal.setScriptData("top", currentHand);
chal.setScriptData("mid", "Ac");
chal.setScriptData("bot", currentHand);

var currentBoard = {"top" : "Ac" }
var lastSet = { "top" : "Ac" }

chal.setScriptData("currentBoard", currentBoard);
chal.setScriptData("lastMove", lastMove);
    
/*
if (playerStats[pId].hasPulled === false){

    //Retrieve current hands
    var currentHand = chal.getScriptData("currentHand");

    //Run the sequence to pull a new card
    require("dealer");
    
    //drawCard(pId);

    //Player can't pull another card this round
    playerStats[pId].hasPulled = true;

    //Save current hand and player stats
    chal.setScriptData("currentHand", currentHand);
    chal.setScriptData("playerStats", playerStats);
} else {
    Spark.setScriptError("Error", "Already pulled card this round");
}
*/


//Finish player turn
chal.consumeTurn(pId);