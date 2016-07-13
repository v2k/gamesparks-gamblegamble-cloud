// GLOBAL MESSAGE

// if we're not on the correct player, consume turn and move to next player
var challengeInstanceId = Spark.getData().challenge.challengeId;
var challenge = Spark.getChallenge(challengeInstanceId);
var nextPlayer = Spark.getData().challenge.nextPlayer;
//var nextPlayer2 = Spark.getChallenge(Spark.getData().challenge.challengeId).nextPlayer;
//challenge.setScriptData("nextPlayer2", nextPlayer2);

// use the given next player, shuffle the rest?
var gameState = challenge.getScriptData("gameState"); 
var playerOrder = challenge.getScriptData("playerOrder");

//var isFinalMove = challenge.getScriptData("isFinalMove");
challenge.setScriptData("turntaken_nextPlayer", nextPlayer);
Spark.setScriptData("turntaken_nextPlayer", nextPlayer);

if (nextPlayer == playerOrder[gameState.actionIndex])
{
	// we're on the correct player
	// let game continue
	//Spark.setScriptData("turntaken_skipped", 1);
}
else
{
	//challenge.consumeTurn(nextPlayer);
	//var currentPlayer = playerOrder[gameState.actionIndex];
	
	// nextPlayer points to the currentPlayer
	/*
	var checkPlayer = playerOrder[gameState.actionIndex];
	challenge.setScriptData("checkPlayer", checkPlayer);
	var otherPlayer = playerOrder[(gameState.actionIndex + 1) % playerOrder.length];
	challenge.setScriptData("otherPlayer", otherPlayer);
	challenge.setScriptData("turntaken_preconsume_nextPlayer", nextPlayer);
	nextPlayer = Spark.getData().challenge.nextPlayer;
	challenge.setScriptData("turntaken_postconsume_nextPlayerA", nextPlayer);
	var B = challenge.consumeTurn(checkPlayer);
	nextPlayer = Spark.getData().challenge.nextPlayer;
	challenge.setScriptData("turntaken_postconsume_nextPlayerB", nextPlayer);
	challenge.setScriptData("turntaken_postSPARK_nextPlayer", Spark.getData().nextPlayer);
	challenge.setScriptData("TEST_A", A);
	challenge.setScriptData("TEST_B", B);
	*/
	//Spark.setScriptData("turntaken_postconsume_nextPlayer", nextPlayer);
}

var setSD = challenge.setScriptData("nextPlayer", nextPlayer);