const result = document.getElementById("result");
const output = document.getElementsByClassName("output")[0];
const buttons = document.querySelectorAll("button");

let userInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.id === "clear") {
      result.value = "";
      output.value = "";
      userInput = "";
    } else if (button.id === "calculate") {
      try {
        const calculationResult = eval(userInput);
        output.value = calculationResult;
      } catch (error) {
        output.value = "Error";
      }
    } else if (button.id === "delete") {
      output.value = "";
      userInput = userInput.slice(0, -1);
      result.value = userInput || "";
    } else {
      if (result.value === "0" || result.value === "Error") {
        result.value = button.id;
        userInput = button.id;
      } else {
        result.value += button.id;
        userInput += button.id;
        output.value = "";
      }
    }
  });
});
