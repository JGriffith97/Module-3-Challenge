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
["1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

var min = 8;
var max = 60;
  var validatePasslength = function() {
    var lengthChoice = window.prompt("Enter desired password length between 8 - 60");
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

  var validateChars = function() {
    var charChoice = window.prompt("Use both lowercase and uppercase characters? ('yes' or 'no')");
        if (charChoice === null) {
        console.log("null")
        return;
      } else if (charChoice === "yes") {
        var confirmPass = upperCharacters.concat(lowerCharacters);
        console.log(confirmPass)
      } else if (charChoice === "no") {
        upLowChoice();
      } else {
        window.alert("Invalid Entry; Input must be 'yes' or 'no'");
        validateChars();
      }
      return charChoice
  }

  var upLowChoice = function() {
    var charChoice = window.prompt("Use only lowercase or uppercase letters? (Enter 'upper' or 'lower')");
      if (charChoice === null) {
      console.log("null")
      return;
    } else if (charChoice === "upper") {
      var confirmPass = upperCharacters;
      console.log(confirmPass)
    } else if (charChoice === "lower") {
      var confirmPass = lowerCharacters;
      console.log(confirmPass)
    } else {
      window.alert("Invalid Entry; Input must be 'upper' or 'lower'");
      upLowChoice();
    }
    return charChoice
  }

  var useSpecial = function() {
    var specialChoice = window.prompt("Use special characters? ('yes or no')", "yes");
      if (specialChoice === null) {
      console.log("null")
      return;
    } else if (specialChoice === "yes") {
      console.log(charChoice)
      console.log("Use special characters.");
    } else if (specialChoice === "no") {
      console.log("Do not use special characters.");
    } else {
      window.alert("Invalid Entry; Input must be 'yes' or 'no'");
      useSpecial();
    }
    return specialChoice
  }

  var useNumbers = function() {
    var numChoice = window.prompt("Use numbers? ('yes' or 'no')", "yes");
      if (numChoice === null) {
      console.log("null")
      return;
    } else if (numChoice === "yes") {
      console.log("Use numbers.");
    } else if (numChoice === "no") {
      console.log("Do not use numbers.");
    } else {
      window.alert("Invalid Entry; Input must be 'yes' or 'no'");
      useNumbers();
    }
    return numChoice
  }

// Write password to the #password input
function writePassword() {
  var lengthChoice = validatePasslength();
  var charChoice = validateChars();
  var specialChoice = useSpecial();
  var numChoice = useNumbers();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
