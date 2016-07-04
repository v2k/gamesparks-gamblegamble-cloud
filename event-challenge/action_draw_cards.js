// ====================================================================================================
//
// Cloud Code for action_draw_cards, write your code here to customise the GameSparks platform.
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

var currentHand = chal.getScriptData("currentHand");

if (playerStats[pId].hasPulled === false) {

	var deck = chal.getPrivateData("deck");
    //Retrieve current hands
    var currentHand = chal.getScriptData("currentHand");

    //Run the sequence to pull a new card
    require("dealer");
    
	// first player needs to draw cards
	var num = Spark.data.num;
	var cardsPulled = playerStats[pId].cardsPulled;
	var drawn = [];

	if (cardsPulled <= 0 && playerStats[pId].inFantasyland)
		num = 14;
	else if (cardsPulled <= 0)
		num = 5;
	else
		num = 3;

	//Pull three cards for each player
	for (var i = 0; i < num; i++) {
		drawn.push(stackDeal(deck));
	}

	currentHand[pId] = drawn;
    //drawCard(pId);

    //Player can't pull another card this round
    playerStats[pId].hasPulled = true;
    playerStats[pId].cardsPulled += num;

    //Save current hand and player stats
    chal.setScriptData("currentHand", currentHand);
    chal.setScriptData("playerStats", playerStats);

	chal.setPrivateData("deck", deck);
	Spark.setScriptData("cards", drawn);
} else {
	Spark.setScriptData("cards", currentHand[pId]);
    Spark.setScriptError("Error", "Already pulled card this round");
}
