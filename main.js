//global variables
var phrases = [
  "GENTLEMAN START YOR ENGINES",
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

randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  console.log("random Phrase", randomPhrase);

  document.getElementById("phrase").innerHTML = randomPhrase.replace(/[a-zA-Z]/g, "-");

//   phraseLog.push(randomPhrase);
//   console.log("PHRASE LOG ARRAY", phraseLog);


document.getElementById("submit").addEventListener("click", function (userChoice){
    userChoice = document.getElementById("user-choice").value.toUpperCase();
    console.log(userChoice);


    function matchLetters() {
        log.push(userChoice);
        // (log.indexOf(userChoice) === -1)
        // document.getElementById("already-picked").innerHTML = "";
            // log.indexOf(userChoice) === -1 ? log.push(userChoice) : null;
            if (randomPhrase.indexOf(userChoice) >= 0) {
                console.log("Lets run guessWord and checkIfGameWon" + userChoice, randomPhrase);
            guessedWord();
            checkIfGameWon();
            } else if (randomPhrase.indexOf(userChoice) === -1) {
                console.log("Lets run checkIfGameLost" + userChoice, randomPhrase);
            //   mistakes++;
            //   updateMistakes();
            checkIfGameLost();
            //   updateHangmanPicture();
            }
        }
        matchLetters();
    
    
    document.getElementById("used-letters").innerHTML = ("Used Letters: " + log);
    console.log("This is the log array", log);
    document.getElementById("user-choice").value = "";
    
    // function usedLetterAlready(){
    //     if (log.indexOf(userChoice) === -1)
    // document.getElementById("already-picked").innerHTML = "";
    // }
    
    // usedLetterAlready()

    function checkIfGameWon() {
        if (wordStatus === log) {
          document.getElementById("already-picked").innerHTML = 'You Won!!!';
        }
      }

      function checkIfGameLost() {
        if (mistakes === maxWrong) {
          document.getElementById("phrase").innerHTML = 'The answer was: ' + answer;
          document.getElementById('keyboard').innerHTML = 'You Lost!!!';
        }
      };

    function guessedWord() {
        wordStatus = randomPhrase.split('').map(letter => (log.indexOf(letter) >= 0 ? letter : " - ")).join('');
        document.getElementById("phrase").innerHTML = wordStatus;
        // console.log(guessedWord());
      };   


});






    // <---original for loop function--->
    // for (let i = 0; i < randomPhrase.length; i++) {
    //     const lettersInPhrase = randomPhrase[i];
    //     console.log("Letters in the phrase", lettersInPhrase);

    //     if (userChoice === lettersInPhrase) {
    //         console.log("There's a match");
    //     } 
    //     else {
    //         console.log("NOOOOOOOPE");
    //     }
    // }







// getUserChoice();