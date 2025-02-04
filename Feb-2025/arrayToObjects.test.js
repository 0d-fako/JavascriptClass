const covertedArrayObject = require("./Feb-2025/arrayToObjects")

test("Test Array to Object", () => {
	expect(arrayToObjects([2,2,1,3,5,5]).toBe({ '1': 1, '2': 2, '3': 1, '5': 2 }),

})