// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test

function calculateTotalScores(scores) {
    // Calculates total of array of scores that's passed in
    let totalScore = 0;
    for (let score of scores) {
        totalScore += score;
    }
    return totalScore;
}

function findWinner(players) {
    let winner = players[0];
    for (let ind = 1; ind < players.length; ind++) {
        if (calculateTotalScores(players[ind].scores) > calculateTotalScores(winner.scores)) {
            winner = players[ind];
        }
    }
    return winner.name;
}

module.exports = {
    findWinner
}