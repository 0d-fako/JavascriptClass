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




function assignBooksToUsers(books, users) {
    const library = {};
    for(const [index, key] of users.entries()){
        library[key] = books[index];
    } 
    return library;  
}

const lectureTime = ["11:00AM", "12:00PM", "1:00PM", "2:00PM", "8:00PM"];

function getTimeHigherThanNoon(lectureTime){
    return lectureTime.filter(time => time.includes("PM"));
}


function getShoppingListTotal(list){
    let total = 0;
    for (const key in list) {
        if (list.hasOwnProperty(key)) {
          total += list[key];
        }
    }
    return total
}





module.exports = { findScoreGreaterThan70, increaseScoreBy5, getSquaredScores, assignBooksToUsers, getTimeHigherThanNoon, getShoppingListTotal};