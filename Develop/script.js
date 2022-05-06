var upperCharacters = 
["A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"]

var lowerCharacters = 
["a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"]

var special = 
["!",
"`",
"~",
"@",
"#",
"$",
"%",
"^",
"&",
"*",
"(",
")",
"{",
"}",
"[",
"]",
"_",
"-",
"=",
"+",
"'",
";",
":",
"/",
"*",
"|",
",",
".",
"<",
">",
"?"]

var numbers = 
["0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"]

var confirmPassBoth = 
[];
var confirmPass =
[];
var confirmSpec =
[];
var confirmNum =
[];

var lengthChoice;
var charChoice;
var specialChoice;
var numChoice;

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Function for determining password length
  var min = 8;
  var max = 128;
    var validatePasslength = function() {
      var lengthChoice = window.prompt("Enter desired password length between 8 - 128");
          if (lengthChoice === null) {
          console.log("null")
          return;
        } else if (lengthChoice < min) {
          window.alert("Invalid Entry; Entry too small");
          validatePasslength();
        } else if (lengthChoice > max) {
          window.alert("Invalid Entry; Entry too large");
          validatePasslength();
        } else {
          console.log("You've entered " + lengthChoice);
        }
        return lengthChoice
    }

// Funtion for determining whether to use both uppercase and lowercase letters, or one of the two
    var validateChars = function() {
      var charChoice = window.prompt("Use both lowercase and uppercase characters? ('yes' or 'no')");
          if (charChoice === null) {
          console.log("null")
          return;
        } else if (charChoice === "yes") {
          confirmPass = upperCharacters.concat(lowerCharacters);
          console.log(confirmPass)
        } else if (charChoice === "no") {
          upLowChoice();
        } else {
          window.alert("Invalid Entry; Input must be 'yes' or 'no'");
          validateChars();
        }
        return charChoice
    }

// As previously stated, function for determining whether to use upper, or lowercase letters, in the event using both is declined
    var upLowChoice = function() {
      var charChoice = window.prompt("Use only lowercase or uppercase letters? (Enter 'upper' or 'lower')");
        if (charChoice === null) {
        console.log("null")
        return;
      } else if (charChoice === "upper") {
        confirmPass = upperCharacters;
        console.log(confirmPass);
      } else if (charChoice === "lower") {
        confirmPass = lowerCharacters;
        console.log(confirmPass);
      } else {
        window.alert("Invalid Entry; Input must be 'upper' or 'lower'");
        upLowChoice();
      }
      return charChoice
    }

// Function for determining whether or not to add special characters 
    var useSpecial = function() {
      var specialChoice = window.prompt("Use special characters? ('yes or no')", "yes");
        if (specialChoice === null) {
        console.log("null")
        return;
      } else if (specialChoice === "yes") {
        console.log("Use special characters.");
        // confirmSpec = confirmPass.concat(special);
        console.log(specialChoice);
      } else if (specialChoice === "no") {
        console.log("Do not use special characters.");
      } else {
        window.alert("Invalid Entry; Input must be 'yes' or 'no'");
        useSpecial();
      }
      return specialChoice
    }

// Function for determining whether or not to add numbers
    var useNumbers = function() {
      var numChoice = window.prompt("Use numbers? ('yes' or 'no')", "yes");
        if (numChoice === null) {
        console.log("null")
        return;
      } else if (numChoice === "yes") {
        console.log("Use numbers.");
        // confirmNum = confirmSpec.concat(numbers);
        console.log(numChoice);
      } else if (numChoice === "no") {
        console.log("Do not use numbers.");
      } else {
        window.alert("Invalid Entry; Input must be 'yes' or 'no'");
        useNumbers();
      }
      return numChoice
    }

    var password = "";
    for (let i = 0; i < lengthChoice; i++) {
    passwordText += letters.at(
        Math.floor(Math.random() * characters.length)
      );
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var lengthChoice = validatePasslength();
  var charChoice = validateChars();
  var specialChoice = useSpecial();
  var numChoice = useNumbers();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generateBtn.addEventListener("click", () => {
//   writePassword()
//   let letters = confirmPass;
  
//     if (specialChoice === "yes" && numChoice === "yes") {
//       letters += numbers, special;
//       passwordText = generatePassword(length.value, letters)
//     } else if (specialChoice === "yes" && numChoice === "no") {
//       letters += special;
//       passwordText = generatePassword(length.value, letters)
//     } else if (specialChoice === "no" && numChoice === "yes") {
//       letters += numbers;
//       passwordText = generatePassword(length.value, letters)
//     } else if (specialChoice === "no" && numChoice === "no") {
//       letters;
//     } else {
//     return
//   };
//   return
// });