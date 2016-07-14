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

challenge.setScriptData("TEST_actionIndex", gameState.actionIndex);
challenge.setScriptData("TEST_nextPlayer", nextPlayer);
challenge.setScriptData("TEST_whoTurn", playerOrder[gameState.actionIndex]);

Spark.setScriptData("currentPlayer", playerOrder[gameState.actionIndex]);
