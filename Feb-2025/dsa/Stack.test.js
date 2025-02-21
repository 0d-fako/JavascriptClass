const Stack = require("./Stack");

test("Test Stack class", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
});