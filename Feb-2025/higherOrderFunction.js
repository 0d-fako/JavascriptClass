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


const shoppingList = [
    {name : "Apple", category : "Fruits", isHealthy : true},
    {name : "Candy", category : "Sweets", isHealthy : false},
    {name : "Carrot", category : "Vegetables", isHealthy : true},
    {name : "Chocolate", category : "Sweets", isHealthy : false},
    {name : "Cucumber", category : "Vegetables", isHealthy : true},

]

function getHealthyItems(shoppingList){
    const healthyItems = shoppingList.filter(item => item.isHealthy);
    healthyItems.forEach(item => {
        console.log(item.name)})
}

getHealthyItems(shoppingList);

module.exports = { findScoreGreaterThan70, increaseScoreBy5, getSquaredScores, assignBooksToUsers, getTimeHigherThanNoon, getShoppingListTotal};