const isRotation = require("./classTask");

test("Test isRotation function", () => {
    expect(isRotation("abcde", "cdeab")).toBe(true);
    expect(isRotation("abcde", "abced")).toBe(false);
});

test("Test isRotation with 2 digits string", () => {
    expect(isRotation("ab", "ba")).toBe(true);

});

test("Test isRotation with 3 digits string", () => {
    expect(isRotation("123456", "612345")).toBe(true);
});