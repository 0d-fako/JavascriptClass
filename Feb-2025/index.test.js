const {multiply, addTwoNumbers, getOddNumbers} = require("./index.js");

let numberOne = 2;
let numberTwo = 6;

test("Multiply two numbers", () =>{
	let result = multiply(numberOne,numberTwo);
	let answer = 12;

	expect(result).toBe(answer);

})

test("Add two numbers", () => {
	let result = addTwoNumbers(numberOne,numberTwo);
	let answer = 8;
		
	expect(result).toBe(answer);


})


test("Test for Odd Numbers", ()=>{
	let array = [1,2,3,4,8,5];
	let result = getOddNumbers(array);
	let answer = [1,3,5];

	expect(result).toEqual(answer);


})