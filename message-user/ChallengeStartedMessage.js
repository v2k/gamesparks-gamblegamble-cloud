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
    var playField = {};
    playField[challengerId] = {};
    playField[challengedId] = {};

    //Construct the current hand JSON - Used for the cards in the player's hands
    var currentHand = {};
    currentHand[challengerId] = {};
    currentHand[challengedId] = {};

    //Construct player details
    var playerStats = {};
    playerStats[challengerId] = {"overallMana": 1, "currentMana": 1, "playerHealth": 30, "cardsPulled": 0, "hasPulled": true, "tauntProtection":false }
    playerStats[challengedId] = {"overallMana": 1, "currentMana": 1, "playerHealth": 30, "cardsPulled": 0, "hasPulled": true, "tauntProtection":false }

    // first player needs to draw cards
    //require("dealer");
    
    // TODO: deal the first 5 cards to player starting
    
    var deck = makeShuffledStackOfDecks(1);
    chal.setPrivateData("deck", deck);
    var drawn = [];
    
    //Pull three cards for each player
    for(var i = 0; i < 5; i++){
        drawn.push(stackDeal(deck));
    }
    
    currentHand[challengedId] = drawn;

    //Save the contructed JSONs against the challenge's scriptData
    //chal.setScriptData("deck", deck);
    chal.setScriptData("playField", playField);
    chal.setScriptData("currentHand", currentHand);
    chal.setScriptData("playerStats", playerStats)
}