// GLOBAL MESSAGE

// if we're not on the correct player, consume turn and move to next player
var challenge = Spark.getChallenge(Spark.getData().challenge.challengeId);
var sparkChal = Spark.getData().challenge;
var nextPlayer = sparkChal.nextPlayer;

// use the given next player, shuffle the rest?
var gameState = challenge.getScriptData("gameState"); 
var playerOrder = challenge.getScriptData("playerOrder");

//var isFinalMove = challenge.getScriptData("isFinalMove");

if (nextPlayer == playerOrder[gameState.actionIndex])
{
	// we're on the correct player
	// let game continue
}
else
{
	challenge.consumeTurn(nextPlayer);
}
