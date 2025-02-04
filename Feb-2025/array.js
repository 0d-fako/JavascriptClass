const array = [];

const arrayOfNumbers = new Array(2);

arrayOfNumbers[0] = 1;
arrayOfNumbers[1] = 2;
arrayOfNumbers.push(1);
arrayOfNumbers.push(2);

console.log(arrayOfNumbers);


arrayOfNumbers.shift();

arrayOfNumbers.unshift(0);

console.log(arrayOfNumbers);

let firstName =  123;

console.log(firstName);

let lastName = Array.from(firstName);

console.log(lastName);
