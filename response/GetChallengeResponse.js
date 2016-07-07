// ====================================================================================================
//
// Cloud Code for RegistrationResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//Set rank to the lowest and declare stars
//Spark.getPlayer().setScriptData("rank", 25);
////Spark.getPlayer().setScriptData("stars", 0);
//Spark.getPlayer().setScriptData("matches", 0);

//Load up the rare cards collection
//var cardCollection = Spark.runtimeCollection("rareCards");

//Declare length of collection
//var length = cardCollection.count() - 1;
//Declare a random number between start and length of collection
//var randNum = Math.floor(Math.random() * (length - 0 + 1));
//Retrieve a random document which represents a card
//var doc = cardCollection.find().limit(-1).skip(randNum).next();

//Save that card on the player's deck including default common cards
//Spark.getPlayer().setPrivateData("deck", [{"name":doc.cardName,"tier":doc.tier}, {"name":"Mage","tier":"commonCards" }, {"name":"Archer","tier":"commonCards" }, {"name":"Warrior","tier":"commonCards" }]);

//Output which card was recieved
//Spark.setScriptData("Your starter rare card", doc.cardName);
var spark = Spark.getData();
var challenge = Spark.challenge;
var nextPlayer = challenge.nextPlayer;
var players = challenge.getAcceptedPlayerIds();
var player = Spark.getPlayer();

// hack for now, 2 players only; dealer is the other player
if (gameState.dealer == null)
{
	for (i = 0; i < players.length; i++) {
		if (player[i] != nextPlayer)
		{
			 gameState.dealer = player[i];
		}
	}
}
/*
var spark = Spark.getData();
var next = spark.nextPlayer;
var gameState = chal.getScriptData("gameState");
var player = Spark.getPlayer();

if (gameState.dealer == null)
{
	 // dealer has not been set, do that now
	 var last;
	 while (true)
	 {
		 last = next;
		 challenge.consumeTurn(next);
		 next = spark.nextPlayer;

		 if (next == player)
		 {
			 // previous player is the dealer
			 gameState.dealer = last;
		 }
	 }
}
*/
challenge.setScriptData("gameState", gameState);
Spark.setScriptData(gameState);
