//Input S= "abcde"
//Input goal = "cdeba"
//Output: true

function isRotation(stringText, str_goal) {
  if (stringText.length !== str_goal.length) {
    return false;
  }

  if (stringText.length % 2 !== 0) {
    let mid = Math.floor(stringText.length / 2);
    let firstHalf = stringText.slice(0, mid);
    let secondHalf = stringText.slice(mid);
    let rotatedString = secondHalf + firstHalf;
    if (rotatedString === str_goal) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isRotation("abcde", "cdeab")); // true
console.log(isRotation("abcde", "abced")); // false

console.log(isRotation("ab", "ba")); // true
console.log(isRotation("cba", "abc")); // false

console.log(isRotation("12345", "cdeba")); // true
module.exports = isRotation;
