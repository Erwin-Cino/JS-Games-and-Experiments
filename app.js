/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores , activePlayer, gamePlaying, firstResult, secondResult, limitScore;

init();





//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice '</em>';
document.querySelector('.dice').style.display = 'none';
/*
function button(){
	// 1.random number
	var dice = Math.floor(Math.random()*6+1);
	// 2.Display results
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
}
button();
*/
function submit() {
	
	// if input has no entries
	
	gamePlaying = true;
	 limitScore = document.getElementById("buttonSubmit").value;
	 // dont display input element
		document.querySelector('.notShow').style.display = 'none';
		//remove padding
		document.getElementById('score-1').style.paddingTop='36px';
		//Show instructions
		document.querySelector('.Begin').style.display = 'block';
		
}
document.querySelector('.submit-btn').addEventListener('click', submit)
document.querySelector('.btn-roll').addEventListener('click',function() {
	
	if(gamePlaying) {
		//remove top padding
		document.getElementById('score-1').style.paddingTop='0';
		//hide instructions
		document.querySelector('.Begin').style.display = 'none';
		// 1.random number
	var dice = Math.floor(Math.random()*6+1);
	var dice2 = Math.floor(Math.random()*6+1);
	// 2.Display results
	var diceDOM = document.querySelector('.dice');
	var diceDOM2 = document.querySelector('.dice2');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	diceDOM2.style.display = 'block';
	diceDOM2.src = 'dice-' + dice2 + '.png';
	// 3. Update the score and make the score zero if dice lands double 6
	if(dice + dice2 == 12 ) {
		//Add score
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent = '0';
		nextPlayer();
	} else if (dice  == 1 || dice2  == 1) {
		
		nextPlayer();
	} else {
		roundScores += dice + dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundScores;
	}
}

	
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying) {
	//Add score to global score
	scores[activePlayer] += roundScores;

	// if there's no entry on the input limitScore
	var winningScore
	if(limitScore) {
		winningScore = limitScore
	} else {
		winningScore = 100;
	}

	// Update UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	
	//Check if player won the game
		if(scores[activePlayer] >= winningScore ) {
		document.querySelector('#name-' + activePlayer).textContent = 'You win!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;

	}  else {
		nextPlayer();
	}
	//Next player 
	}

	



})
function nextPlayer() {
		//Next player
		activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
		roundScores = 0;
		document.getElementById('current-1').textContent = '0'; 
		document.getElementById('current-0').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	
	}
		document.querySelector('.btn-new').addEventListener('click', init);


function init() {
	//make scores zero
scores = [0,0];
roundScores = 0;
activePlayer = 0;
gamePlaying = false;
document.getElementById('name-1').textContent = 'Player 2';
document.getElementById('name-0').textContent = 'Player 1'
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.notShow').style.display = 'block';
document.querySelector('#score-1').style.paddingTop = '76px';
document.querySelector('.Begin').style.display = 'none';
}


var x = document.querySelector('#score-0').textContent; 
console.log(x);