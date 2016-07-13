// GLOBAL MESSAGE

// if we're not on the correct player, consume turn and move to next player
var challenge = Spark.getChallenge(Spark.getData().challenge.challengeId);
var nextPlayer = Spark.getData().challenge.nextPlayer;

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
	
	challenge.setScriptData("turntaken_preSPARK_nextPlayer", Spark.getData().nextPlayer);
	challenge.setScriptData("turntaken_preconsume_nextPlayer", nextPlayer);
	challenge.consumeTurn(nextPlayer);
	challenge.consumeTurn(playerOrder[(gameState.actionIndex + 1) % playerOrder.length]);
	nextPlayer = Spark.getData().challenge.nextPlayer;
	challenge.setScriptData("turntaken_postconsume_nextPlayer", nextPlayer);
	challenge.setScriptData("turntaken_postSPARK_nextPlayer", Spark.getData().nextPlayer);
	//Spark.setScriptData("turntaken_postconsume_nextPlayer", nextPlayer);
}
