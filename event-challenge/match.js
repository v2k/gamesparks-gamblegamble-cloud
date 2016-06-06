// ====================================================================================================
//
// Cloud Code for match, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//Get shortCode
var matchshortCode = Spark.getData().match_shortCode;

//If shortCode is equal to 'rankedMatch' send a matchmakingRequest for a ranked match
if (matchshortCode === "ofc"){
    //Create the request
    var matchRequest = new SparkRequests.MatchmakingRequest();

    //Assign shortCode and skill based on player rank
    matchRequest.matchShortCode = matchshortCode;
    //matchRequest.skill = Spark.getPlayer().getScriptData("rank");
    // set to 0 for not caring?

    //Send request
    matchRequest.Send();
}