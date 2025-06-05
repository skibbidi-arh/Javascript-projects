 let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();

      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
          result = (computerMove === 'rock') ? 'You lose.' :
                   (computerMove === 'paper') ? 'You win.' : 'Tie.';
        } else if (playerMove === 'paper') {
          result = (computerMove === 'rock') ? 'You win.' :
                   (computerMove === 'paper') ? 'Tie.' : 'You lose.';
        } else if (playerMove === 'rock') {
          result = (computerMove === 'rock') ? 'Tie.' :
                   (computerMove === 'paper') ? 'You lose.' : 'You win.';
        }

        if (result === 'You win.') score.wins += 1;
        else if (result === 'You lose.') score.losses += 1;
        else score.ties += 1;

        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();

        document.querySelector('.result').innerHTML = result;
        document.querySelector('.moves').innerHTML =` you 
       <img src="images/${playerMove}-emoji.png" class="icons">
        <img src="images/${computerMove}-emoji.png" class="icons">
        computer`
      }

      function pickComputerMove() {
        const randomNumber = Math.random();
        if (randomNumber < 1 / 3) return 'rock';
        else if (randomNumber < 2 / 3) return 'paper';
        else return 'scissors';
      }

      function updateScoreElement() {
        document.querySelector('.score').innerHTML =
          `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function resetScore() {
        score = { wins: 0, losses: 0, ties: 0 };
        localStorage.removeItem('score');
        updateScoreElement();
        document.querySelector('.result').textContent = '';
        document.querySelector('.moves').textContent = '';
      }
