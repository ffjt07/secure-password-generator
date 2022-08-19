// Assignment code here
// Global Variables
var specialChar = [
  "!",
  "\u0022",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "\u005B",
  "\u005C",
  "\u005D",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
console.log(specialChar);
var numbersGen = "0123456789".split("");
console.log(numbersGen);
var alphabetGen = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabetGen);
var megaArray = [];
// User Function
function generatePassword() {
  var userLength = prompt(
    "How many characters do you want your password? \n Must be between 8 and 128 characters."
  );
  var userLower = confirm(
    "Would you like lowercase letters? \nOk for yes, Cancel for no"
  );
  var userCapital = confirm(
    "Would you like CAPITAL letters? \nOk for yes, Cancel for no"
  );
  var userNumber = confirm(
    "Would you like numbers? \nOk for yes, Cancel for no"
  );
  var userSpecial = confirm(
    "Would you like special characters? \nOk for yes, Cancel for no"
  );

  if (userLength < 8 || userLength > 128) {
    alert("Please select a number between 8 and 128 \nfor password length.");
    return generatePassword();
  }
  if (!userLower && !userCapital && !userNumber && !userSpecial) {
    alert("You need to select one of the password elements");
    return generatePassword();
  }

  if (userLower) {
    for (var i = 0; i < alphabetGen.length; i++) {
      megaArray.push(alphabetGen[i]);
    }
  }

  if (userCapital) {
    for (var i = 0; i < alphabetGen.length; i++) {
      megaArray.push(alphabetGen[i].toUpperCase());
    }
  }

  if (userNumber) {
    for (var i = 0; i < numbersGen.length; i++) {
      megaArray.push(numbersGen[i]);
    }
  }

  if (userSpecial) {
    for (var i = 0; i < specialChar.length; i++) {
      megaArray.push(specialChar[i]);
    }
  }
  console.log(megaArray);
  var password = [];
  function passwordGen() {
    var randChar = megaArray[Math.floor(Math.random() * megaArray.length)];
    password.push(randChar);
  }
  if (password.length < userLength) {
    for (i = 0; i < userLength; i++) {
      passwordGen();
    }
  }
  console.log(password);
  return password.join("");
}


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

