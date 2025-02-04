function addTwoNumbers(firstNumber, secondNumber){
	let answer = firstNumber + secondNumber;
	return answer;

}

function multiply(firstNumber,secondNumber){
	let answer = firstNumber * secondNumber;
	return answer;

}

function getOddNumbers(array){
	let newArray = [];
	for(num of array){
		if (num % 2 != 0) newArray.push(num);
	}
	return newArray;

}

module.exports = {multiply, addTwoNumbers, getOddNumbers}