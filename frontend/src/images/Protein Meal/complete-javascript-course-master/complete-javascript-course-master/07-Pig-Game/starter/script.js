// var scores, roundScore, activePlayer, dice;
// scores = [0,0];
// roundScore = 0;
// activePlayer = 1;

//roll dice 
var dice = document.querySelector('.btn--roll');
var diceImage = document.querySelector('.dice');
var activePlayer = 0;
var hold = document.querySelector('.btn--hold');
var isHold = false;
// var diceNumber = Math.floor(Math.random() * 6) + 1;

diceImage.style.display = 'none';

//show results
var score = 0;
var tscore = 0;
var currentScore = document.querySelector('.current-score').textContent = 0;
var totalScore = document.querySelector('#score--' + score).textContent = tscore;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--1').textContent = 0;

// currentScore.textContent = 0;


// Dice
dice.addEventListener('click', function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceImage.style.display = 'block';
    diceImage.src = 'dice-' + diceNumber + '.png';

    if (diceNumber !== 1) {
        // if roll-dice is not === 1

        currentScore += diceNumber;

        document.querySelector('#current--' + activePlayer).textContent = currentScore;
        hold.addEventListener('click', function () {


            document.querySelector('#score--' + score).textContent = currentScore;
            console.log(currentScore)

            diceImage.style.display = 'none';

            document.querySelector('.player--0').classList.remove('player--active')
            document.querySelector('.player--1').classList.add('player--active')

            isHold = true;
            document.querySelector('#current--' + activePlayer).textContent = 0;
            console.log(isHold + '\n' + activePlayer)
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            score === 0 ? score = 1 : score = 0;
            console.log('score: ' + score)

            currentScore = 0;
            console.log('currentScore: ' + currentScore);

            // dice.addEventListener('click', function() {

            // })

            hold.addEventListener('click', function () {
                score += diceNumber;
                diceImage.style.display = 'none';
                document.querySelector('#current--' + activePlayer).textContent = 0;

            })
        })
        // if (isHold === true) {
        //     document.querySelector('#current--' + activePlayer).textContent = 0;
        //     console.log(isHold + '\n' + activePlayer)
        //     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //     score === 0 ? score = 1 : score = 0;
        //     console.log('score: ' + score)

        //     hold.addEventListener('click', function () {
        //         score += diceNumber;
        //         diceImage.style.display = 'none';
        //     })

        // }
        // document.querySelector('.current-score').textContent = currentScore;
        console.log(currentScore)


    }

    else {
        // if rolle dice === 1
        diceImage.style.display = 'none';
        document.querySelector('#current--' + activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // currentScore = 0;
        score === 0 ? score = 1 : score = 0;
        //role dice
        dice.addEventListener('click', function () {
            diceImage.style.display = 'block';
        })
        //hold dice
        hold.addEventListener('click', function () {
            score += diceNumber;
            diceImage.style.display = 'none';

            document.querySelector('.player--0').classList.add('player--active')
            document.querySelector('.player--1').classList.remove('player--active')
        })
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')


    }


})
