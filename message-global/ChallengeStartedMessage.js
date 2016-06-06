// GLOBAL MESSAGE

//Loads the cards module with the functions we need
gs_load("dealer");

//Gets the current challenge so we can populate it with cards and hands
//This uses the GameSparks "Spark" API (Documented in the portal)
var challenge = Spark.getChallenge(Spark.data.challenge.challengeId);

//Use the module method to create a stack of cards using 2 decks
//We'll store this in private data to no-one can ever work out 
//what card comes next.
challenge.setPrivateData("deck", makeShuffledStackOfDecks(1));

//Create an empty array to hold the hand state
var hands = [];   

//Gets the list of player ID's who have accepted the challenge
var accepted = challenge.getAcceptedPlayerIds();

//Create an empty hand object for each player and add it to the hands array
for(i=0 ; i<accepted.length ; i++){
    hands[i] = {id:accepted[i], hand:[]};
}

//Store the initialised hands array against the challenge
challenge.setScriptData("hands", hands);