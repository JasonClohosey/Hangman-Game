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
    log.push(userChoice);
    console.log(userChoice);
    console.log("This is the log array", log);
    document.getElementById("user-choice").value = "";
});



// getUserChoice();