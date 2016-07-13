// ====================================================================================================
//
// Cloud Code for action_set_hand, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
require("dealer");
require("gamestate");

//Load challenge
var chal = Spark.getChallenge(Spark.getData().challengeInstanceId);

//Retrieve player Id
var pId = Spark.getPlayer().getPlayerId();
//Retrieve player stats
var playerStats = chal.getScriptData("playerStats");

if (playerStats[pId].hasPulled)
{
    playerStats[pId].hasPulled = false;

    var gameBoards = chal.getScriptData("gameBoards");
    var playerOrder = chal.getScriptData("playerOrder");
    var gameState = chal.getScriptData("gameState"); 

    // grab the cards that the user set
    var hand = Spark.data.hand;

    // create arrays if they are not already set
    if (hand.top && !gameBoards[pId].top) {
        gameBoards[pId].top = [];
    }

    if (hand.mid && !gameBoards[pId].mid) {
        gameBoards[pId].mid = [];
    }

    if (hand.bot && !gameBoards[pId].bot) {
        gameBoards[pId].bot = [];
    }
    
    // set this player's board to the hand sent by client
    if (hand.top) {
        gameBoards[pId].top = gameBoards[pId].top.concat(hand.top);
    }

    if (hand.mid) {
        gameBoards[pId].mid = gameBoards[pId].mid.concat(hand.mid);
    }

    if (hand.bot) {
        gameBoards[pId].bot = gameBoards[pId].bot.concat(hand.bot);
    }

	// update our stats
    var num = ((gameBoards[pId].top)?gameBoards[pId].top.length:0) + ((gameBoards[pId].mid)?gameBoards[pId].mid.length:0) + ((gameBoards[pId].bot)?gameBoards[pId].bot.length:0);
    playerStats[pId].cardsPlaced = num;
    if (num == 13) {
        playerStats[pId].completed = true;
    } else {
        playerStats[pId].completed = false;
    }


    // TODO: might not be right to pass the turn.
	// check the board, see if there are more moves to play; others might be in fantasy land too
	var finalMove = IsFinalMove(chal);

	// if it's the final move, let's do scoring 
	// then pass turn
    var stillTurn = false;
	if (finalMove) {
        stillTurn = true;
	} else {
		chal.setScriptData("isFinalMove", finalMove);
        var nextPlayer = chal.nextPlayer;
        //chal.setScriptData("before_nextPlayer", nextPlayer);
        //Spark.setScriptData("before_nextPlayer", nextPlayer);

        //Finish player turn
        //chal.consumeTurn(nextPlayer); -- TurnTake gets called from a log event; no need to use it here
        Spark.setScriptData("currentPlayer", pId);

        // if we're the dealer, increment the turn counter
        if (playerOrder[playerOrder.length - 1] == pId)
        {
            gameState.turn++;
            gameState.actionIndex = 0;
        }
        else
        {
            // this should never overflow, but...
            gameState.actionIndex = (gameState.actionIndex + 1) % playerOrder.length;
        }

        Spark.setScriptData("playerOrder_next", playerOrder[gameState.actionIndex]);
	}

    chal.setScriptData("stillTurn", stillTurn);
    Spark.setScriptData("isFinalMove", finalMove);
    Spark.setScriptData("stillTurn", stillTurn);

    chal.setScriptData("lastMove", hand);
    chal.setScriptData("gameBoards", gameBoards);
    chal.setScriptData("playerStats", playerStats);
    chal.setScriptData("gameState", gameState);
}
