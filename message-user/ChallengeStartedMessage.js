// ====================================================================================================
//
// Cloud Code for ChallengeStartedMessage, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//Declare challenge
var chal = Spark.getChallenge(Spark.getData().challenge.challengeId);

//Player IDs
var challengerId = chal.getChallengerId();
var challengedId = chal.getChallengedPlayerIds()[0];

require("dealer");

//Initiation of the challenge settings through the challenger(similar to host)
if (Spark.getPlayer().getPlayerId() === challengerId) {

    //Construct the play field JSON - Used for the playing field
    var board = {};
    board[challengerId] = {};
    board[challengedId] = {};

    //Construct the current hand JSON - Used for the cards in the player's hands
    var currentHand = {};
    currentHand[challengerId] = {};
    currentHand[challengedId] = {};

    

    // first player needs to draw cards
    var deck = makeShuffledStackOfDecks(1);
    chal.setPrivateData("deck", deck);
    var drawn = [];
    
    //Pull three cards for each player
    for(var i = 0; i < 5; i++){
        drawn.push(stackDeal(deck));
    }
    
    currentHand[challengedId] = drawn;

    //Construct player details
    var playerStats = {};
    playerStats[challengerId] = {"score": 0, "numFL": 0, "cardsPulled": 0, "hasPulled": false }
    playerStats[challengedId] = {"score": 0, "numFL": 0, "cardsPulled": 5, "hasPulled": true }
    
    var gameState = {};

    //Save the contructed JSONs against the challenge's scriptData
    //chal.setScriptData("deck", deck);
    chal.setScriptData("board", board);
    chal.setScriptData("currentHand", currentHand);
    chal.setScriptData("playerStats", playerStats)
    chal.setScriptData("gameState", gameState)
}
