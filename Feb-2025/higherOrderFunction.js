const testScores = [90, 85, 78, 99, 100, 88, 78, 95, 89, 90];


function findScoreGreaterThan70(scores) {
  return scores.filter(score => score > 70);
}


function increaseScoreBy5(scores) {
  return scores.map(score => score + 5);
}

function getSquaredScores(scores) {
  return scores.map(score => score * score);
}



module.exports = { findScoreGreaterThan70, increaseScoreBy5, getSquaredScores };