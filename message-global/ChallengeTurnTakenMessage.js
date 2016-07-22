// GLOBAL MESSAGE

// if we're not on the correct player, consume turn and move to next player
var challengeInstanceId = Spark.getData().challenge.challengeId;
var challenge = Spark.getChallenge(challengeInstanceId);
var nextPlayer = Spark.getData().challenge.nextPlayer;
var playerId = Spark.getPlayer().getPlayerId();

// use the given next player, shuffle the rest?
var gameState = challenge.getScriptData("gameState"); 
var playerOrder = challenge.getScriptData("playerOrder");

//var isFinalMove = challenge.getScriptData("isFinalMove");
challenge.setScriptData("turntaken_nextPlayer", nextPlayer);
challenge.setScriptData("turntaken_actionIndex", gameState.actionIndex);
Spark.setScriptData("turntaken_nextPlayer", nextPlayer);

if (nextPlayer == playerOrder[gameState.actionIndex])
{
	// we're on the correct player
	// let game continue
}
else
{
	challenge.consumeTurn(nextPlayer);
}

challenge.setScriptData("nextPlayer", nextPlayer);
challenge.setScriptData("turnTakenPlayer", playerId);
