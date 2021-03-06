// Assignment Code


var generateBtn = document.querySelector("#generate");

// variables added
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var special = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var password = ""

// create password length prompt
function generatePassword(){
  var length = parseInt(prompt('password must between at least 8 and 128 characters'));
  if (isNaN(length) || length < 8 || length > 128) {
    //alert if not enough characters
  window.alert('Try Again. Length must be betweeen 8 and 128')   
  return;
  } 

var allowedChars = [];
//use lowercase here
var useLowerCase = window.prompt('Do you want lowercase letters? (Y/N)').toUpperCase();
if (useLowerCase === 'Y') {
  allowedChars = allowedChars.concat(lowerCase)
  }

//use uppercase here
  var useUpperCase = window.prompt('Do you want uppercase letters? (Y/N)').toUpperCase();
  if (useUpperCase === 'Y') {
  allowedChars = allowedChars.concat(upperCase)
  }
//use special characters here
var useSpecialChar = window.prompt('Do you want special characters? (Y/N)').toUpperCase();
if (useSpecialChar === 'Y') {
allowedChars = allowedChars.concat(special)
}

//use numbers here
var useNumber = window.prompt('Do you want numbers? (Y/N)').toUpperCase();
if (useNumber === 'Y') {
allowedChars = allowedChars.concat(number)
}
//added for loop
for (let i = 0; i < length; i++) {
  const element = allowedChars[Math.floor(Math.random()*allowedChars.length)];
  password=password+element
  }
return password;
}

// Write password to the #password input
//changed password to password2
function writePassword() {
  var password2 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password2;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
