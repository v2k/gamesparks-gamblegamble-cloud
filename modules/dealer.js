//This function creates and array of cards, and populates it with 'numberOfDecks" worth of decks.
//This is not used externally but is extracted into it's own function for readability
function makeStackOfDecks(numberOfDecks) {

	var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
	var suits = new Array("c", "d", "h", "s");
	var i, j, k;
	var m;

	m = ranks.length * suits.length;

	// Set array of cards.
	deck = new Array(numberOfDecks * m);

	// Fill the array with 'n' packs of cards.
	for (i = 0; i < numberOfDecks; i++) {
		for (j = 0; j < suits.length; j++) {
			for (k = 0; k < ranks.length; k++) {
				deck[i * m + j * ranks.length + k] = ranks[k] + suits[j];
				// new Card(ranks[k], suits[j]);
			}
		}
	}

	return deck;
}

//This function calls makeStackOfDecks and uses the Fisher–Yates method to shuffle the deck
function makeShuffledStackOfDecks(numberOfDecks) {

	var stack = makeStackOfDecks(numberOfDecks);

	var i, j, k;
	var temp;

	// Shuffle the stack 'n' times.
	for (i = 0; i < 10; i++) {
		for (j = 0; j < stack.length; j++) {
			k = Math.floor(Math.random() * stack.length);
			temp = stack[j];
			stack[j] = stack[k];
			stack[k] = temp;
		}
	}

	return stack;
}

// An object representing a card that we can save in the challenge.
function Card(rank, suit) {
	this.rank = rank;
	this.suit = suit;
}

function stackDeal(deck) {

	if (deck.length > 0) {
		return deck.shift();
	} else {
		return null;
	}
}

function stackDraw(deck, n) {

	var card;

	if (n >= 0 && n < deck.length) {
		card = deck[n];
		deck.splice(n, 1);
	} else {
		card = null;
	}

	return card;
}
