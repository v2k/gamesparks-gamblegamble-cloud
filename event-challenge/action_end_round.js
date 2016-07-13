/// this is set as an 'ok to advance to next round action' - allows each player to view scoring locally
//Load challenge
var chal = Spark.getChallenge(Spark.getData().challengeInstanceId);

//Retrieve player Id
var pId = Spark.getPlayer().getPlayerId();
//Retrieve player stats
var playerStats = chal.getScriptData("playerStats");

if (!playerStats[pId].hasScored)
{
	playerStats[pId].hasScored = true;
}