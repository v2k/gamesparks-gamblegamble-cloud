// ====================================================================================================
//
// Cloud Code for ChallengeTurnTakenMessage, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
/*
//Load challenge
var chal = Spark.getChallenge(Spark.getData().challenge.challengeId);

//load playerStats
var playerStats = Spark.getScriptData("playerStats");

//If challenger reaches 0 or lower health while challenged has more than 0 health, challenged wins
//if(playerStats[chal.getChallengerId()].currentHealth &lt;= 0 &amp;&amp; playerStats[chal.getChallengedPlayerIds()[0]].currentHealth &gt; 0){
    chal.winChallenge(Spark.loadPlayer(chal.getChallengedPlayerIds()[0]));
//}
//If challenged reaches 0 or lower health whole challenger has more than 0 health, challenger wins
//if(playerStats[chal.getChallengedPlayerIds()[0]].currentHealth &lt;= 0 &amp;&amp; playerStats[chal.getChallengerId()].currentHealth &gt; 0){
    chal.winChallenge(chal.getChallengerId());
//}
//If both players reach zero or lower health, a draw is in order
//if(playerStats[chal.getChallengedPlayerIds()[0]].currentHealth &lt;= 0 &amp;&amp; playerStats[chal.getChallengerId()].currentHealth &lt;= 0){
    chal.drawChallenge();
//}
*/