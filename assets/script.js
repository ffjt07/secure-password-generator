// Assignment code here
// Global Variables
var specialChar = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\u005B", "\u005C", "\u005D", "^", "_", "`", "{", "|", "}", "~"]
console.log(specialChar)

var alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
console.log(alphabet)

var userSpecial = confirm("Would you like special characters? \nOk for yes, Cancel for no")
var userCapital = confirm("Would you like CAPITAL letters? \nOk for yes, Cancel for no")
var userLower = confirm("Would you like lowercase letters? \nOk for yes, Cancel for no")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
