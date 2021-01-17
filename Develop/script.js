// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);

// Optional characters to include in password, chosen by user
var lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericalCharArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharArr = ['!', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '?', '@', '^', '_', '~'];

var passwordLength = "";

// Confirm password length and alert if incorrect length is entered
function passwordCriteria() {
  passwordLength = prompt("Please choose a password length between 8 and 128 characters.")
  if (passwordLength >= 8 && passwordLength <= 128) {
    writePassword();
  } else {
    alert("Incorrect value, please enter a value between 8 and 128.")
  } return;
}

// Confirms what characters the user wants in the password and generates the random password
function generatePassword() {
  var bigArray = [];
  var finalPassword = "";


    if (confirm("Would you like your password to include numbers?")) {
      bigArray = bigArray.concat(numericalCharArr)
    }

    if (confirm("Would you like your password to include lowercase characters?")) {
      bigArray = bigArray.concat(lowerCaseLettersArr)
    }

    if (confirm("Would you like your password to include uppercase characters?")) {
      bigArray = bigArray.concat(upperCaseLettersArr)
    }

    if (confirm("Would you like your password to include special characters?")) {
      bigArray = bigArray.concat(specialCharArr)
    }

    for (i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword + bigArray[Math.floor(Math.random() * bigArray.length)];
  }

  return finalPassword
} 
