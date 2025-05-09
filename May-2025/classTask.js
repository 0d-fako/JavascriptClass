//Input S= "abcde"
//Input goal = "cdeba"
//Output: true

function isRotation(stringText, str_goal) {
  if (stringText.length !== str_goal.length) {
    return false;
  }

  let combined = stringText + stringText;
  return combined.includes(str_goal); 
}

console.log(isRotation("abcde", "cdeab")); // true
console.log(isRotation("abcde", "abced")); // false

console.log(isRotation("ab", "ba")); // true
console.log(isRotation("cba", "abc")); // false


module.exports = isRotation;
