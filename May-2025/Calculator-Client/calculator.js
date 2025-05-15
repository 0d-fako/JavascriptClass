async function calculate() {
  const display = document.getElementById("display").value;
  const operators = ["+", "-", "*", "/"];

  let operator, num1, num2;

  for (let operand of operators) {
    if (display.includes(operand)) {
      operator = operand;
      [num1, num2] = display.split(operand).map(Number);
      break;
    }
  }

  if (!operator || isNaN(num1) || isNaN(num2)) {
    alert("Invalid input");
    return;
  }

  const operationMap = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
  };
  const operation = operationMap[operator];

  try {
    const response = await fetch("http://localhost:8080/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ num1, num2, operation }),
    });

    const data = await response.json();
    document.getElementById("display").value = data.result;
  } catch (error) {
    alert("Error connecting to server");
  }
}

function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
