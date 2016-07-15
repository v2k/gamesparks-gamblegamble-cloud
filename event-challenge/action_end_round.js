/// this is set as an 'ok to advance to next round action' - allows each player to view scoring locally

var challenge = Spark.getChallenge(Spark.getData().challengeInstanceId);

//var challenge.setScriptData("action_end_round", 1);
var scoring = Spark.data.scoring;

//Retrieve player stats
var playerStats = challenge.getScriptData("playerStats");
var gameState = challenge.getScriptData("gameState");
var playerOrder = challenge.getScriptData("playerOrder");

var test = 1;
challenge.setScriptData("action_end_round", test);
//Retrieve player Id
var pId = Spark.getPlayer().getPlayerId();

if (!playerStats[pId].hasOwnProperty("hasScored") || !playerStats[pId].hasScored)
{
	for (var playerId in playerStats)
	{
		if (playerStats.hasOwnProperty(playerId))
		{
			playerStats[playerId].score = scoring[playerId];
		}
	}

	playerStats[pId].hasScored = true;
}

// check to see if everyone is ready for the next round
var everyoneScored = true;

for (var playerId in playerStats)
{
	if (playerStats.hasOwnProperty(playerId))
	{
		if (!playerStats[playerId].hasScored)
		{
			everyoneScored = false;
		}
	}
}

challenge.setScriptData("everyoneScored", everyoneScored);
if (everyoneScored)
{
	challenge.setScriptData("gameState", gameState);
	gs_load("gamestate");
	OnSetupNextRound(challenge);
	OnRoundStart(challenge);
}
else
{
	// this should never overflow, but...
	gameState.actionIndex = (gameState.actionIndex + 1) % playerOrder.length;
}

challenge.setScriptData("gameState", gameState);

Spark.setScriptData("playerStats", playerStats);
Spark.setScriptData("gameState", gameState);

