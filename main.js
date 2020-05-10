//global variables
var phrases = [
  "Gentleman start your engines",
  "Door bumper clear",
  "Too fast entering",
  "Checkered flag",
  "Dale Earnhardt",
  "Jimmie Johnson",
  "Pit road",
  "NASCAR Cup Series",
  "Restrictor plate",
  "Super Speedway",
];

var log = [];

//function to generate random phrase
function getPhrase(randomPhrase) {
  randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  console.log("random Phrase", randomPhrase);

  document.getElementById("phrase").innerHTML = randomPhrase.replace(/[a-zA-Z]/g, "-");


  // for (let i = 0; i < randomPhrase.length; i++) {
  //     const lettersInPhrase = randomPhrase[i];
  //     console.log(dashes);
  // }
}
getPhrase();

document.getElementById("submit").addEventListener("click", function (userChoice){
    userChoice = document.getElementById("user-choice").value.toLowerCase();
    if (log.indexOf(userChoice) === -1) {
        log.push(userChoice);
        document.getElementById("used-letters").innerHTML = ("Used Letters: " + log);
        document.getElementById("already-picked").innerHTML = "";
        console.log(userChoice);
        console.log("?")
    } else {
        document.getElementById("already-picked").innerHTML = "You already picked that letter, please try again";
        // alert ("You already picked that letter")
        console.log("You already picked that letter")
    };
    console.log("This is the log array", log);
    document.getElementById("user-choice").value = "";
});



// getUserChoice();