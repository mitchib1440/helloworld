var finalScore = 73;
var highScore = 78;
var levelCompleted = true;

const logHighScore = () => {
	return "New high score! You got " + highScore + " points!";
};

const endGame = () => {
	return "Game over!";
};


const testHighScore = (finalScore, highScore) => {
	if(finalScore >= highScore) {
        return true;
	logHighScore()
	}
};

if(levelCompleted) {
    if (testHighScore(finalScore, highScore) === true) {
        console.log(logHighScore());
    }
	endGame();
}
