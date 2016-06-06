// ====================================================================================================
//
// Cloud Code for MatchFoundMessage, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//If our match is ranked
if (Spark.getData().matchShortCode === "ofc")
{
    //If the first participant
    if(Spark.getPlayer().getPlayerId() === Spark.getData().participants[0].id){

        //Create a challenge request
        var request = new SparkRequests.CreateChallengeRequest();

        //Fill in the details, give a date in the future, the right shortCode,
        //make it a private challenge and invite participant 2
        request.accessType = "PRIVATE";
        request.challengeShortCode = "chalRanked";
        request.endTime = "2128-02-23T13:47Z";
        request.expiryTime = "2128-02-23T12:47Z";
        request.usersToChallenge = [Spark.getData().participants[1].id];

        //Send the request
        request.Send();
    }
}