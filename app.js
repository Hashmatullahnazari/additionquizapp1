function addNumbers() {
    // Generate two random numbers
    var number1 = Math.floor(Math.random() * 100);
    var number2 = Math.floor(Math.random() * 100);

    // Display the numbers in the elements with the 'number1' and 'number2' ids
    document.getElementById('number1').innerHTML = "Number 1: " + number1;
    document.getElementById('number2').innerHTML = "Number 2: " + number2;

    // Add the numbers
    var result = number1 + number2;

    // Display the result in the input element with the 'result' id
    document.getElementById('result').value = "";

    // Clear the result message
    document.getElementById('result-message').innerHTML = "";
  }

  function checkResult() {
    // Get the result input by the user
    var userResult = document.getElementById('result').value;

    // Convert the result to a number
    userResult = Number(userResult);

    // Get the correct result
    var number1 = Number(document.getElementById('number1').innerHTML.split(": ")[1]);
    var number2 = Number(document.getElementById('number2').innerHTML.split(": ")[1]);
    var correctResult = number1 + number2;

    // Check if the user's result is correct
    if (userResult === correctResult) {
      // Display a message indicating that the result is correct
      document.getElementById('result-message').innerHTML = "Correct! " + correctResult + ".";;
    } else {
      // Display a message indicating that the result is incorrect
      document.getElementById('result-message').innerHTML = "Incorrect. The correct answer is " + correctResult + ".";
    }
  }