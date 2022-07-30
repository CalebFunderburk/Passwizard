// Generate Button
var generateBtn = document.querySelector("#generate");

// Function to generate a random interger
function getRandomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var smart = Math.random();
  return Math.floor(min *(1 - smart) + smart * max);
}

// Use a random integer to select an item in our selected list
function getRandomItem(list) {
  return list[getRandomInt(0, list.length)];
}

//Generate a password
function generatePassword() {
  console.log("Button works!");

  // Character sets
  var lowercaseCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersCharSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharSet = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", "?", ">", "<", ".", ",", ";", ":", "'", "[", "]", "{", "}"];

  // Chosen password options
  var confirmedOptions = [];

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
      console.log("User declared an invalid parameter.");
      return;
    }

    // Password must not be longer than 12 characters long  
    if (promptLength > 128) {
      window.alert("Your password cannot be longer than 128 characters long.");
      console.log("User declared an invalid parameter.");
      return;
    }

    // Please provide a numeric value
    if (isNaN(promptLength)) {
      window.alert("Please provide a numeric value.");
      console.log("User declared an invalid parameter.");
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
      confirmedOptions.push(lowercaseCharSet);
      console.log("User decided to include lowercase characters in their password.");
    }
    
    // If no, don't 
    else {
      console.log("User decided not to include lowercase characters in their password.");
    }

  // Option for uppercase characters
  var confirmUppercase = window.confirm("Would you like to include Uppercase characters?");

    // If yes, use uppercase letters
    if (confirmUppercase == true) {
      confirmedOptions.push(uppercaseCharSet);
      console.log("User decided to include uppercase characters in their password.");
    }

    // If no, don't
    else {
      console.log("User decided not to include uppercase characters in their password.");
    }

  // Option for numbers
  var confirmNumbers = window.confirm("Would you like to include Numbers?");

    // If yes, use numbers
    if (confirmNumbers == true) {
      confirmedOptions.push(numbersCharSet);
      console.log("User decided to include numbers in their password.");
    }

    // If no, don't
    else {
      console.log("User decided not to include numbers in their password.");
    }

  // Option for special characters
  var confirmSpecial = window.confirm("Would you like to include Special characters?");

    // If yes, use special characters
    if (confirmSpecial == true) {
      confirmedOptions.push(specialCharSet);
      console.log("User decided to include special characters in their password.");
    }

    // If no, don't
    else {
      console.log("User decided not to include special characters in their password.");
    }
  
  // If no confirm window is confirmed, inform the user they must choose 1
  if (confirmedOptions.length === 0) {
    window.alert("You must choose at least 1 character set. Please try again.");
    console.log("User did not choose a character set.");
    return;
  }

    // Empty string to contain the generated password
    var generatedPassword = "";

    // Generate random characters equal to the defined length from the character sets provided
    for (var i = 0; i < passwordLength; i++) {
      var randomList = getRandomItem(confirmedOptions);
      var randomChar = getRandomItem(randomList);
      generatedPassword += randomChar;
    }

    // Exit the function with a password matching the users criteria
    console.log("User's generated password: " + generatedPassword);
    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
