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

var password =
[];

var confirmFinal =
[];

var charChoiceFinal =
[];

var specChoiceFinal =
[];

var numChoiceFinal =
[];

var stringFinal =
[];

var lengthChoice;
var charChoice;
var specChoice;
var numChoice;

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Function for determining password length
  var min = 8;
  var max = 128;
    var validatePasslength = function() {
      lengthChoice = window.prompt("Enter desired password length between 8 - 128");

          if (lengthChoice === null) {
          return;

        } else if (lengthChoice < min) {
          window.alert("Invalid Entry; Entry too small");
          validatePasslength();

        } else if (lengthChoice > max) {
          window.alert("Invalid Entry; Entry too large");
          validatePasslength();

        } else {
          console.log("You've entered " + lengthChoice);
          charValidation()
        }
        return lengthChoice
    }

// Funtion for determining whether to use both uppercase and lowercase letters, or one of the two
    var validateChars = function() {
      charChoice = window.prompt("Use both lowercase and uppercase characters? ('yes' or 'no')");

          if (charChoice === null) {
          console.log("null")
          return;

        } else if (charChoice === "yes") {
          console.log("yes")
          charChoiceFinal = upperCharacters.concat(lowerCharacters)
          console.log(charChoiceFinal)
          specValidation()

        } else if (charChoice === "no") {
          console.log("no")
          upLowChoice();

        } else {
          window.alert("Invalid Entry; Input must be 'yes' or 'no'");

        }
        return charChoice
    }

// As previously stated, function for determining whether to use upper, or lowercase letters, in the event using both is declined
    var upLowChoice = function() {
      charChoice = window.prompt("Use only lowercase or uppercase letters? (Enter 'upper' or 'lower')");

        if (charChoice === null) {
        console.log("null")
        return;

      } else if (charChoice === "upper") {
        charChoiceFinal = upperCharacters
        console.log(charChoiceFinal);
        specValidation()

      } else if (charChoice === "lower") {
        charChoiceFinal = lowerCharacters
        console.log(charChoiceFinal);
        specValidation()

      } else {
        window.alert("Invalid Entry; Input must be 'upper' or 'lower'");
        upLowChoice();
      }
      return charChoice
    }

// Function for determining whether or not to add special characters 
    var useSpecial = function() {
      specChoice = window.prompt("Use special characters? ('yes or no')", "yes");

        if (specChoice === null) {
        console.log("null")
        return;

      } else if (specChoice === "yes") {
        console.log("yes")
        specChoiceFinal = special;
        console.log(specChoiceFinal)
        numValidation()

      } else if (specChoice === "no") {
        console.log("no")
        console.log("Do not use special characters.");
        numValidation()

      } else {
        window.alert("Invalid Entry; Input must be 'yes' or 'no'");
        useSpecial();

      }
      return specChoice
    }

// Function for determining whether or not to add numbers
    var useNumbers = function() {
      numChoice = window.prompt("Use numbers? ('yes' or 'no')", "yes");

        if (numChoice === null) {
        console.log("null")
        return;

      } else if (numChoice === "yes") {
        numChoiceFinal = numbers;
        console.log(numChoiceFinal);
        combineArray()

      } else if (numChoice === "no") {
        console.log("Do not use numbers.");
        combineArray()

      } else {
        window.alert("Invalid Entry; Input must be 'yes' or 'no'");
        useNumbers();

      }
      return numChoice
    }

// Function to combine the different arrays, to eventually be converted into a string
    var combine = function() {

        if (numChoice === "no" && specChoice === "yes") {
          confirmFinal = charChoiceFinal.concat(specChoiceFinal);
          console.log(confirmFinal);
          genPassword();

        } else if (specChoice === "no" && numChoice === "yes") {
          confirmFinal = charChoiceFinal.concat(numChoiceFinal);
          console.log(confirmFinal);
          genPassword();

        } else if (specChoice === "no" && numChoice === "no") {
          confirmFinal = charChoiceFinal
          console.log(confirmFinal)
          genPassword();

        } else if (numChoice && specChoice === "yes") {
          console.log("All options applied.")
          confirmFinal = charChoiceFinal.concat(specChoiceFinal, numChoiceFinal);
          genPassword();

      }
      return
    } 

    var generatePassword = function() {
      console.log(confirmFinal)
      console.log(typeof confirmFinal)
      console.log(lengthChoice)
      for (let i = 0; i < lengthChoice; i++) {
        var randomPass = confirmFinal[Math.floor(Math.random() * confirmFinal.length)]
        password.push(randomPass)
      }
        console.log(password)
        showPassword()
      return
    }

      var postPassword = function() {
        stringFinal = password.join('')
        console.log(stringFinal)
        console.log(typeof password)
        var passwordText = document.querySelector("#password");
        passwordText.value = stringFinal;
      }
    

// Write password to the #password input
function writePassword() {
  var lengthChoice = validatePasslength();
}
function charValidation() {
  var charChoice = validateChars();
}
function specValidation() {
  var specChoice = useSpecial();
}
function numValidation() {
  var numChoice = useNumbers();
}
function combineArray() {
  var confirmFinal = combine();
}

function genPassword() {
  var password = generatePassword();
}

function showPassword() {
  var output = postPassword();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// includes, see if something from each array is included