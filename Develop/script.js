//Created a global string to reference the characters
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&' + "'()*+,-./:;<=>?@[]^_`{|}~";
var contains;
// Assignment code here
function generatePassword() {
  // Asking how many characters they would like in the password
  var promptpasssize = window.prompt('How many characters would you like?');
  // defined where we will place the random characters for the password
  var pass = '';
  // created if statement that checks that the prompt had the required values
  if (promptpasssize >= 8 && promptpasssize <= 128) {
    var lowcase = confirm("Would you like lowercase letters in the password?");
    var upcase = confirm("Would you like uppercase letters in the password?");
    var nums = confirm("Would you like numbers in the password?");
    var spchar = confirm("Would you like Special Characters in the password?");
    // if statement to check that one of the confirm statements is true
    if (lowcase === true || upcase === true || nums === true || spchar === true){
      // Created if statement for when user selects all
      if (lowcase === true && upcase === true && nums === true && spchar === true) {
        while (promptpasssize > 0) {
          var randomall = Math.floor(Math.random() * chars.length);
          pass += chars[randomall];
          promptpasssize--;
        }
        return pass;
      }
      
      // Created else/if statement for when user selects lowercase
      else if (lowcase === true && upcase === false && nums === false && spchar === false) {
        while (promptpasssize > 0) {
          var low = chars.substring(26, 51);
          var randomlow = Math.floor(Math.random() * low.length);
          pass += low[randomlow];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects uppercase
      else if (lowcase === false && upcase === true && nums === false && spchar === false) {
        while (promptpasssize > 0) {
          var cap = chars.substring(0, 25);
          var randomcap = Math.floor(Math.random() * cap.length);
          pass += cap[randomcap];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects lowercase/numbers
      else if (lowcase === true && upcase === false && nums === true && spchar === false) {
        while (promptpasssize > 0) {
          var lown = chars.substring(26, 61);
          var randomnlown = Math.floor(Math.random() * lown.length);
          pass += lown[randomnlown];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statment for when user selects lowercase/special characters
      else if (lowcase === true && upcase === false && nums === false && spchar === true) {
        while (promptpasssize > 0) {
          var lows = chars.substring(26, 51) + chars.substring(62, 92);
          var randomnlows = Math.floor(Math.random() * lows.length);
          pass += lows[randomnlows];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects numbers
      else if (lowcase === false && upcase === false && nums === true && spchar === false) {
        while (promptpasssize > 0) {
          var num = chars.substring(52, 61);
          var randomnum = Math.floor(Math.random() * num.length);
          pass += num[randomnum];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects special characters
      else if (lowcase === false && upcase === false && nums === false && spchar === true) {
        while (promptpasssize > 0) {
          var spc = chars.substring(62, 92);
          var randomspc = Math.floor(Math.random() * spc.length);
          pass += spc[randomspc];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects lowercase/uppercase
      else if (lowcase === true && upcase === true && nums === false && spchar === false) {
        while (promptpasssize > 0) {
          var lets = chars.substring(0, 51);
          var randomlets = Math.floor(Math.random() * lets.length);
          pass += lets[randomlets];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects lowercase/uppercase/numbers
      else if (lowcase === true && upcase === true && nums === true && spchar === false) {
        while (promptpasssize > 0) {
          var lowupnum = chars.substring(0, 61);
          var randomlun = Math.floor(Math.random() * lowupnum.length);
          pass += lowupnum[randomlun];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects uppercase/numbers
      else if (lowcase === false && upcase === true && nums === true && spchar === false) {
        while (promptpasssize > 0) {
          var upnum = chars.substring(0, 25) + chars.substring(52, 61);
          var randomupn = Math.floor(Math.random() * upnum.length);
          pass += upnum[randomupn];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects uppercase/numbers/special characters
      else if (lowcase === false && upcase === true && nums === true && spchar === true) {
        while (promptpasssize > 0) {
          var upnum = chars.substring(0, 25) + chars.substring(52, 92);
          var randomupn = Math.floor(Math.random() * upnum.length);
          pass += upnum[randomupn];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects uppercase/special characters
      else if (lowcase === false && upcase === true && nums === false && spchar === true) {
        while (promptpasssize > 0) {
          var upnum = chars.substring(0, 25) + chars.substring(62, 92);
          var randomupn = Math.floor(Math.random() * upnum.length);
          pass += upnum[randomupn];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects numbers/special characters
      else if (lowcase === false && upcase === false && nums === true && spchar === true) {
        while (promptpasssize > 0) {
          var nspc = chars.substring(52, 92);
          var randomnspc = Math.floor(Math.random() * nspc.length);
          pass += nspc[randomnspc];
          promptpasssize--;
        }
        return pass;
      }

      // Created else/if statement for when user selects lowercase/uppercase/special characters
      else if (lowcase === true && upcase === true && nums === false && spchar === true) {
        while (promptpasssize > 0) {
          var lus = chars.substring(0, 51) + chars.substring(62, 92);
          var randomnlus = Math.floor(Math.random() * lus.length);
          pass += lus[randomnlus];
          promptpasssize--;
        }
        return pass;
      }
    }
    else {
      alert("You must say 'OK' to at lease one requirement for the password.");
      generatePassword();
    }
  }
  else {
    alert("Please choose a valid character amount between '8' and '128'.")
    generatePassword();
  }
};

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
