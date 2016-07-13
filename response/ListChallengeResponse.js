// ====================================================================================================
//
// Cloud Code for RegistrationResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//Set rank to the lowest and declare stars

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

//var challenges = Spark.getData().challengeInstances;