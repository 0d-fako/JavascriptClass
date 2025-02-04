const {multiply, addTwoNumbers} = require("./index.js");

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