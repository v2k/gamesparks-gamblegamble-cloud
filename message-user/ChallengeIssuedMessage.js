// ====================================================================================================
//
// Cloud Code for ChallengeIssuedMessage, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//Easy access to data
var chalData = Spark.getData();
//New request to join the challenge automatically
var request = new SparkRequests.AcceptChallengeRequest();

//Retrieve the challenge ID to use it in the AcceptChallenge request
request.challengeInstanceId = chalData.challenge.challengeId;
request.message = "Joining";

//Send the request as the player recieving this message
request.SendAs(chalData.challenge.challenged[0].id);