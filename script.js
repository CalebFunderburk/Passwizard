// Generate Button
var generateBtn = document.querySelector("#generate");

//Generate a password
function generatePassword() {
  console.log("Button works");

  //  Promt the user for the password criteria
  var promptLength = window.prompt("How many characters would you like your password to be?");

    // Password must be 8 characters long
    if (promptLength < 8) {
      window.alert("Your password must be at least 8 characters long.");
      console.log("User chose invalid parameter")
      return;
    }

    // Password must not be longer than 12 characters long  
    if (promptLength > 128) {
      window.alert("Your password cannot be longer than 128 characters long.");
      console.log("User chose invalid parameter")
      return;
    }

    //
    else {
      console.log("User chose " + promptLength)
    }

  // Option for lowercase characters  
  var confirmLowercase = window.confirm("Would you like to include Lowercase characters?");

    // If yes, use lowercase characters

    // If no, don't 

  // Option for uppercase characters
  var confirmUppercase = window.confirm("Would you like to include Uppercase characters?");

  // Option for numeric characters
  var confirmNumbers = window.confirm("Would you like to include Numbers?")

  // Option for special characters
  var confirmSpecial = window.confirm("Would you like to include Special characters?");

//  2. Validate the input (make sure the length is between 8 and 128, at least 1 character type is being selected for the password)
//  3. Generate password based off criteria

  // Display the password to the page
  return
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
