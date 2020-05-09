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

document.getElementById("submit").addEventListener("click", function (getUserChoice){
    getUserChoice = document.getElementById("user-choice").nodeValue.toLocaleLowerCase();
    console.log(getUserChoice);
    document.getElementById("user-choice").value = "";
});



// getUserChoice();