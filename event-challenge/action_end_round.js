// TODO
/// this is set as an 'ok to advance to next round action' - allows each player to view scoring locally
//Load challenge

var challenge = Spark.getChallenge(Spark.getData().challengeInstanceId);

var scoring = Spark.data.scoring;

//Retrieve player Id
var pId = Spark.getPlayer().getPlayerId();
//Retrieve player stats
var playerStats = challenge.getScriptData("playerStats");

if (!playerStats[pId].hasScored)
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
			everyoneScored = false;
	}
}

if (everyoneScored)
{
	gs_load("gamestate");
	OnSetupNextRound();
}
else
{
	// this should never overflow, but...
	gameState.actionIndex = (gameState.actionIndex + 1) % playerOrder.length;
}

challenge.setScriptData("gameState", gameState);

Spark.setScriptData("playerStats", playerStats);
Spark.setScriptData("gameState", gameState);
