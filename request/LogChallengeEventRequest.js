// ====================================================================================================
//
// Cloud Code for LogChallengeEventRequest, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
// here?
var challengeInstanceId = Spark.getData().challengeInstanceId;
var challenge = Spark.getChallenge(challengeInstanceId);
var playerOrder = challenge.getScriptData("playerOrder");
var gameState = challenge.getScriptData("gameState");
var nextPlayer = challenge.getScriptData("nextPlayer");
//var	nextPlayer = Spark.getData().challenge.nextPlayer;

challenge.setScriptData("TEST_actionIndex", gameState.actionIndex);
challenge.setScriptData("TEST_nextPlayer", nextPlayer);
challenge.setScriptData("TEST_whoTurn", playerOrder[gameState.actionIndex]);

if (nextPlayer == playerOrder[gameState.actionIndex])
{
	// we're on the correct player
	// let game continue
	//Spark.setScriptData("turntaken_skipped", 1);
}
else
{
	challenge.consumeTurn(nextPlayer);
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

Spark.setScriptData("currentPlayer", playerOrder[gameState.actionIndex]);
