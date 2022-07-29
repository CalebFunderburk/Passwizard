// Assignment Code
// Generate Button
var generateBtn = document.querySelector("#generate");

//Generate a password
function generatePassword() {
  console.log("Button working");
  var promptLength = window.prompt('How many characters would you like your password to be?')
    if (promptLength < 8) {
      window.alert("Your password must be at least 8 characters long.")
    }

//  1. Promt the user for the password criteria
//    A.) Password length 8 < 128
//    B.) Lowercase, uppercase, or special characters?
//  2. Validate the input (make sure the length is between 8 and 128, at least 1 character type is being selected for the password)
//  3. Generate password based off criteria

  // Display the password to the page
  return "Generated password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
