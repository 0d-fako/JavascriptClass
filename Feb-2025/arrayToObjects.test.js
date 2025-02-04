const covertedArrayObject = require("./arrayToObjects");

let array = [2,2,1,3,5,5];

test("Test Array to Object", () => {
	let result = covertedArrayObject(array);
	let answer = {'1': 1, '2': 2, '3': 1, '5': 2};
	expect(result).toEqual(answer);

})