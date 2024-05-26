function appendToDisplay(value) {
  const display = document.getElementById("display");

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const expression = document.getElementById("display").value;

  const result = eval(expression);

  if (Number.isFinite(result)) {
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value =
      "Division by zero is not allowed";
  }
}
