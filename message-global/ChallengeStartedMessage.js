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

//Player IDs
var challengerId = challenge.getChallengerId();
var challengedId = challenge.getChallengedPlayerIds()[0];

//Initiation of the challenge settings through the challenger(similar to host)
//both players get this, so only trigger on the host?
//if (Spark.getPlayer().getPlayerId() === challengerId) {
	require("dealer");

	var playerStats = {};
	var players = challenge.getAcceptedPlayerIds();
	for (i = 0; i < players.length; i++) {
		playerStats[players[i]] = {"score": 0, "numFL": 0, "cardsPulled": 0, "hasPulled": false }
	}

	//Construct the play field JSON - Used for the playing field
	var board = {};
	board[challengerId] = {};
	board[challengedId] = {};

	//Construct the current hand JSON - Used for the cards in the player's hands
	var currentHand = {};
	currentHand[challengerId] = {};
	currentHand[challengedId] = {};

	//currentHand[challengedId] = drawn;

	//Construct player details
	//playerStats[challengerId] = {"score": 0, "numFL": 0, "cardsPulled": 0, "hasPulled": false }
	//playerStats[challengedId] = {"score": 0, "numFL": 0, "cardsPulled": 0, "hasPulled": false }

	// TODO: randomize this
	var gameState = {"turn": challengerId};

	//Save the contructed JSONs against the challenge's scriptData
	//chal.setScriptData("deck", deck);
	//chal.setScriptData("board", board);
	//chal.setScriptData("currentHand", currentHand);
	challenge.setScriptData("playerStats", playerStats);
	challenge.setScriptData("gameState", gameState);

	Spark.logEvent("on_round_started", {"id":challenge.getId});

	//var eventAttr1 = Spark.getData().CC_ATTR
	//var eventAttr2 = Spark.getData().CC_ATTR_2
	//var eventAttr3 = Spark.getData().CC_ATTR_3
	//Spark.setScriptData("eventAttr1", chal.getId);
	//Spark.setScriptData("eventAttr2", eventAttr2 * 10);
	//eventAttr3.won = true
	//Spark.setScriptData("eventAttr3", eventAttr3);

//}
