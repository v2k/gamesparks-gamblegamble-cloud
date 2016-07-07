// GLOBAL MESSAGE


// pick the dealer/first to start
// score, stats => 0
// pass state to starting player -> OnRoundStarted


//Loads the cards module with the functions we need
//gs_load("dealer");

//Gets the current challenge so we can populate it with cards and hands
//This uses the GameSparks "Spark" API (Documented in the portal)
//var chal = Spark.getChallenge(Spark.data.challenge.challengeId);

//Create an empty array to hold the hand state
//var stats = [];   

//Gets the list of player ID's who have accepted the challenge
//var accepted = challenge.getAcceptedPlayerIds();

//Create an empty hand object for each player and add it to the hands array
//for(i=0 ; i<accepted.length ; i++){
//hands[i] = {id:accepted[i], hand:[]};
//}

//var playerStats = chal.getScriptData("playerStats");
//Store the initialised hands array against the challenge
//challenge.setScriptData("visible_hands", hands);
//challenge.setScriptData("playerStats", hands);

//Declare challenge
var challenge = Spark.getChallenge(Spark.getData().challenge.challengeId);
var spark = Spark.getData();
//var next = spark.nextPlayer;
var sparkChal = Spark.getData().challenge;
var nextPlayer = sparkChal.nextPlayer;
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

while (dealer == null)
{
	lastPlayer = nextPlayer;
	var ret = challenge.consumeTurn(nextPlayer);
	sparkChal = Spark.getData().challenge;
	nextPlayer = sparkChal.nextPlayer;
	
	if (nextPlayer == firstPlayer)
	{
		dealer = lastPlayer;
		break;
	}
}

//Construct the play field JSON - Used for the playing field
//var board = {};
//board[challengerId] = {};
//board[challengedId] = {};

//Construct the current hand JSON - Used for the cards in the player's hands
//var currentHand = {};
//currentHand[challengerId] = {};
//currentHand[challengedId] = {};

//var playersData = {};
//currentHand[challengedId] = drawn;

//Construct player details
//playerStats[challengerId] = {"score": 0, "numFL": 0, "cardsPulled": 0, "hasPulled": false }
//playerStats[challengedId] = {"score": 0, "numFL": 0, "cardsPulled": 0, "hasPulled": false }

// handled by gamesparks for turn start
var gameState = { "dealer": dealer, "turn":0, "round":0, "num_players": players.length, "is_last_move": false };// "turn": challengerId};

//Save the contructed JSONs against the challenge's scriptData
//chal.setScriptData("deck", deck);
//chal.setScriptData("board", board);
//chal.setScriptData("currentHand", currentHand);
challenge.setScriptData("playerStats", playerStats);
challenge.setScriptData("gameState", gameState);

require("gamestate");
OnRoundStart(challenge);
