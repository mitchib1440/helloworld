var finalScore = 73;
var highScore = 78;
var levelCompleted = true;

const testHighScore = (finalScore, highScore) => {
	if(finalScore >= highScore) {
        return true;
	}
};

const endGame = () => {
	return "Game over!";
};

const logHighScore = () => {
	return "New high score! You got " + highScore + " points!";
};

if(levelCompleted) {
    if (testHighScore(finalScore, highScore) === true) {
        logHighScore();
    }
	endGame();
}