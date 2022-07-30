// Generate Button
var generateBtn = document.querySelector("#generate");

//Generate a password
function generatePassword() {
  console.log("Button works!");

  //  Promt the user for the password criteria
  var promptLength = window.prompt("How many characters would you like your password to be?");

    // If the user presses cancel, back out of the prompt
    if (promptLength === null) {
      console.log("User has decided to cancel.");
      return;
    }

    // Password must be 8 characters long
    if (promptLength < 8) {
      window.alert("Your password must be at least 8 characters long.");
      console.log("User declared invalid parameter.");
      return;
    }

    // Password must not be longer than 12 characters long  
    if (promptLength > 128) {
      window.alert("Your password cannot be longer than 128 characters long.");
      console.log("User declared invalid parameter.");
      return;
    }

    // Please provide a numeric value
    if (isNaN(promptLength)) {
      window.alert("Please provide a numeric value.");
      console.log("User declared invalid parameter.");
      return;
    }

    // Turn the provided string into a number
    else {
      var passwordLength = parseInt(promptLength);
      console.log("User decided to make their password " + promptLength + " characters long.");
    }

  // Option for lowercase characters  
  var confirmLowercase = window.confirm("Would you like to include Lowercase characters?");

    // If yes, use lowercase letters
    if (confirmLowercase == true) {

      // Call a function to get lowercase characters

      console.log("User decided to include lowercase characters in their password.");
    }
    
    // If no, don't 
    if (confirmLowercase == false) {
      console.log("User decided not to include lowercase characters in their password.");
    }

  // Option for uppercase characters
  var confirmUppercase = window.confirm("Would you like to include Uppercase characters?");

    // If yes, use uppercase letters
    if (confirmUppercase == true) {

      // Call a function to get uppercase characters

      console.log("User decided to include uppercase characters in their password.");
    }

    // If no, don't
    if (confirmUppercase == false) {
      console.log("User decided not to include uppercase characters in their password.");
    }

  // Option for numbers
  var confirmNumbers = window.confirm("Would you like to include Numbers?");

    // If yes, use numbers
    if (confirmNumbers == true) {

      // Call a function to get numbers

      console.log("User decided to include numbers in their password.");
    }

    // If no, don't
    if (confirmNumbers == false) {
      console.log("User decided not to include numbers in their password.");
    }

  // Option for special characters
  var confirmSpecial = window.confirm("Would you like to include Special characters?");

    // If yes, use special characters
    if (confirmSpecial == true) {

      // Call a function to get special characters

      console.log("User decided to include special characters in their password.");
    }

    // If no, don't
    if (confirmSpecial == false) {
      console.log("User decided not to include special characters in their password.");
    }

//  3. Generate password based off criteria

  // Display the password to the page
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
