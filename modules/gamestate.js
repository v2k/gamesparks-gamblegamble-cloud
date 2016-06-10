// ====================================================================================================
//
// Cloud Code for action_set_hand, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

function OnRoundStart(challenge)
{

	gs_load("dealer");

	// clear board
	// set next player to start


	//Gets the current challenge so we can populate it with cards and hands
	//This uses the GameSparks "Spark" API (Documented in the portal)
	var chal = challenge;//Spark.getChallenge(Spark.getData().challengeInstanceId);

	var gameState = chal.getScriptData("gameState");

	//Use the module method to create a stack of cards using 2 decks
	//We'll store this in private data to no-one can ever work out 
	//what card comes next.

	//Create an empty array to hold the hand state
	var deck = makeShuffledStackOfDecks(1);
	var gameBoards = [];
	var board = [];   
	var currentHand = {};

	//Gets the list of player ID's who have accepted the challenge
	var players = challenge.getAcceptedPlayerIds();

	var playerToActId = gameState["turn"];

	//Create an empty hand object for each player and add it to the hands array
	for (i = 0; i < players.length; i++) {
		gameBoards[players[i]] = {id:players[i], board:[]};
		currentHand[players[i]] = {};
	}

	// first player needs to draw cards
	var drawn = [];

	//Pull three cards for each player
	for (var i = 0; i < 5; i++) {
		drawn.push(stackDeal(deck));
	}

	currentHand[playerToActId] = drawn;
	//Store the initialised hands array against the challenge
	//challenge.setScriptData("visible_hands", hands);
	//Retrieve player stats
	//Retrieve player Id
	//var pId = Spark.getPlayer().getPlayerId();

	// set top, mid, and bot
	//chal.setScriptData("top", currentHand);
	//chal.setScriptData("mid", "Ac");
	//chal.setScriptData("bot", currentHand);

	//var currentBoard = {"top" : "Ac" }
	//var lastSet = { "top" : "Ac" }

	chal.setScriptData("currentHand", currentHand);
	chal.setScriptData("gameBoards", gameBoards);
	//chal.setScriptData("lastMove", lastMove);

	chal.setPrivateData("deck", deck);

	/*
	   if (playerStats[pId].hasPulled === false){

	//Retrieve current hands
	var currentHand = chal.getScriptData("currentHand");

	//Run the sequence to pull a new card
	require("dealer");

	//drawCard(pId);

	//Player can't pull another card this round
	playerStats[pId].hasPulled = true;

	//Save current hand and player stats
	chal.setScriptData("currentHand", currentHand);
	chal.setScriptData("playerStats", playerStats);
	} else {
	Spark.setScriptError("Error", "Already pulled card this round");
	}
	*/


	//Finish player turn
	//chal.consumeTurn(pId);
}
