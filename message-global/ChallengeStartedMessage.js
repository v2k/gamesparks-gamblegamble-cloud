// GLOBAL MESSAGE

// pick the dealer/first to start
// score, stats => 0
// pass state to starting player -> OnRoundStarted
var challenge = Spark.getChallenge(Spark.getData().challenge.challengeId);
var spark = Spark.getData();
var sparkChal = Spark.getData().challenge;
var firstPlayer = sparkChal.nextPlayer;
var dealer;
var lastPlayer;

//Player IDs
var challengerId = challenge.getChallengerId();
var challengedId = challenge.getChallengedPlayerIds()[0];

require("dealer");

var playerStats = {};
var players = challenge.getAcceptedPlayerIds();
for (i = 0; i < players.length; i++) {
	playerStats[players[i]] = {"score": 0, "numFL": 0, "cardsPulled": 0, "inFantasyland": false, "hasPulled": false }
}

// use the given next player, shuffle the rest?
var playerOrder = [];
playerOrder.push(firstPlayer);

for (i = 0; i < players.length; i++) {
	if (players[i] != firstPlayer)
	{
		playerOrder.push(players[i]);
	}
}

dealer = playerOrder[playerOrder.length - 1];

//var nextPlayer = challenge.nextPlayer
//var players = acceptedIds
var order = [];

while (order.length != players.length)
{
	foreach (player in players)
  	{
  		if (challenge.consumeTurn(player))
  		{
  			order.push(player);
  		}
  	}
}

challenge.setScriptData("order", order);


// handled by gamesparks for turn start
var gameState = { actionIndex:0, "first":firstPlayer, "dealer":dealer, "turn":0, "round":0, "num_players": players.length, "is_last_move": false };

//Save the contructed JSONs against the challenge's scriptData
challenge.setScriptData("playerStats", playerStats);
challenge.setScriptData("gameState", gameState);
challenge.setScriptData("playerOrder", playerOrder);
challenge.setScriptData("nextPlayerId", firstPlayer);
challenge.setScriptData("nextPlayer", firstPlayer);

require("gamestate");
OnRoundStart(challenge);
