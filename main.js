//global variables
var phrases = [
  "GENTLEMAN START YOUR ENGINES",
  "DOOR BUMPER CLEAR",
  "TOO FAST ENTERING",
  "CHECKERED FLAG",
  "DALE EARNHARDT",
  "JIMIE JOHNSON",
  "PIT ROAD",
  "NASCAR CUP SERIES",
  "RESTRICTOR PLATE",
  "SUPER SPEEDWAY",
];

var log = [" "];
var phraseLog = [];
var wordStatus = null
let maxWrong = 6;
let mistakes = 0;
var element = document.getElementById("restart");

if(element.style.display === "none"){
    element.style.display = "block";
}else{
    element.style.display = "none";
}
function toggle(ID){
    var element = document.getElementById("restart");
    if(element.style.display === "none"){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
}

randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  console.log("random Phrase", randomPhrase);

  document.getElementById("phrase").innerHTML = randomPhrase.replace(/[a-zA-Z]/g, "-");

document.getElementById("submit").addEventListener("click", function (userChoice){
    userChoice = document.getElementById("user-choice").value.toUpperCase();
    console.log(userChoice);

    
    function matchLetters() {
            if (log.indexOf(userChoice) === -1 && (randomPhrase.indexOf(userChoice) >= 0)) {
                document.getElementById("message").innerHTML = ("That letter there is a winner!")
                console.log("Lets run guessWord and checkIfGameWon" + userChoice, randomPhrase);
            log.push(userChoice);
            guessedWord();
            checkIfGameWon();
            }else if (log.indexOf(userChoice) >=0 && (randomPhrase.indexOf(userChoice) >= 0) || (log.indexOf(userChoice) >=0) && (randomPhrase.indexOf(userChoice) === -1)) {
                document.getElementById("message").innerHTML = ("The definition of insanity is try the same thing twice expecting a different result. Try another letter driver");
            }
            else {
                document.getElementById("message").innerHTML = ("Ok that one didn't work,pull your self together, we can still win this.")
                console.log("Lets run checkIfGameLost" + userChoice, randomPhrase);
              mistakes++;
              maxWrong--;
            log.push(userChoice);
            checkIfGameLost();
            // updateHangmanPicture();
            }
            
        }
        matchLetters();
    
    
    document.getElementById("used-letters").innerHTML = "Used Letters: " + log.join("");
    console.log("This is the log array", log);
    document.getElementById("user-choice").value = "";

    function checkIfGameWon() {
        if (wordStatus === randomPhrase) {
          document.getElementById("message").innerHTML = 'You Won!!!';
          console.log(wordStatus, log);
          reset();
        }
      }

      function checkIfGameLost() {
        if (maxWrong === 0) {
          document.getElementById("phrase").innerHTML = 'The answer was: ' + randomPhrase;
          document.getElementById("message").innerHTML = 'You Lost!!!';
          reset();
        }
      };

    function guessedWord() {
        wordStatus = randomPhrase.split('').map(letter => (log.indexOf(letter) >= 0 ? letter : " - ")).join('');
        document.getElementById("phrase").innerHTML = wordStatus;
      };   
      function reset() {
        toggle();
      };

      
      document.getElementById("mistakes").innerHTML = ("Total Mistakes: " + mistakes);
    document.getElementById("maxWrong").innerHTML = ("Mistakes Left: " + maxWrong);
});
    