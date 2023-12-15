var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  
    passwordLength = prompt("How long is your password? (choose between 8 and 128 characters)");
    console.log("Password length " + passwordLength);
    
    if(!passwordLength) {
      alert("ERROR!");
  
    } else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("You must choose between 8 and 128");
      console.log("Password length " + passwordLength);
    
    } else { 
      confirmLower = confirm("Will your password have lower case letters?");
      console.log("Lower case " + confirmLower);
      confirmUpper = confirm("Will your password have upper case letters?");
      console.log("Upper case " + confirmUpper);
      confirmNumber = confirm("Will your password have numbers?");
      console.log("Number " + confirmNumber);
    };
    if (!confirmLower && !confirmUpper && !confirmNumber) {
      userChoices = alert("You must choose a criteria");
    } else if (confirmLower && confirmUpper && confirmNumber) {
      userChoices = lowerCase.concat(upperCase, numbers);
      console.log(userChoices);
    }
    else if (confirmLower && confirmUpper && confirmNumber) {
      userChoices = lowerCase.concat(upperCase, numbers);
      console.log(userChoices);
    }
    else if (confirmLower && confirmUpper) {
      userChoices = lowerCase.concat(upperCase);
      console.log(userChoices);
    }
    else if (confirmLower && confirmNumber) {
      userChoices = lowerCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmUpper && confirmNumber) {
      userChoices = upperCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmLower && confirmUpper) {
      userChoices = lowerCase.concat(upperCase);
      console.log(userChoices);
    }
    else if (confirmLower && confirmNumber) {
      userChoices = lowerCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmUpper && confirmNumber) {
      userChoices = upperCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmUpper) {
        userChoices = blankUpper.concat(upperCase);
        console.log(userChoices);
      }
    else if (confirmLower) {
      userChoices = lowerCase;
      console.log(userChoices);
    }
    else if (confirmNumber) {
      userChoices = numbers;
      console.log(userChoices);
    };
  
    
    var passwordBlank = [];
    
    
    for (var i = 0; i < passwordLength; i++) {
      var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
      passwordBlank.push(allChoices);
      console.log(allChoices);
    }
  
    
    var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
    return password;
    
  }
  