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

var log = [];
var phraseLog = [];

randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  console.log("random Phrase", randomPhrase);

  document.getElementById("phrase").innerHTML = randomPhrase.replace(/[a-zA-Z]/g, "-");

  phraseLog.push(randomPhrase);
  console.log("PHRASE LOG ARRAY", phraseLog);


document.getElementById("submit").addEventListener("click", function (userChoice){
    userChoice = document.getElementById("user-choice").value.toUpperCase();

function matchLetters() {
    for (let i = 0; i < randomPhrase.length; i++) {
        const lettersInPhrase = randomPhrase[i];
        console.log("Letters in the phrase", lettersInPhrase);

        if (userChoice === lettersInPhrase) {
            console.log("There's a match");
        } else {
            console.log("NOOOOOOOPE");
        }
    }

}
matchLetters();

    if (log.indexOf(userChoice) === -1) {
        log.push(userChoice);
        document.getElementById("used-letters").innerHTML = ("Used Letters: " + log);
        document.getElementById("already-picked").innerHTML = "";
        // console.log(userChoice);
        console.log("NICE")
    } else {
        document.getElementById("already-picked").innerHTML = "You already picked that letter, please try again";
        // alert ("You already picked that letter")
        console.log("You already picked that letter")
    };
    console.log("This is the log array", log);
    document.getElementById("user-choice").value = "";
});



// getUserChoice();