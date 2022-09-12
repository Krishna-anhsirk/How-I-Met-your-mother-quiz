import readlineSync from 'readline-sync';
import chalk from 'chalk';

const right = chalk.green;
const wrong = chalk.red;
const gameName = chalk.bold.cyan;
const name = chalk.bgYellow;
const rules = chalk.bgCyan;

//Take username as input
var userName = readlineSync.question("What is your name? ");

//Welcoming the user
console.log("Welcome " + name(userName) + "! to are you a " + gameName(" HOW I MET YOUR MOTHER fan?") );

//For displaying rules
console.log(rules("So here are the rules of the game !"));
console.log(rules("For every correct answer you get one point,"));
console.log(rules("and for every wrong answer you lose on point."));

var score = 0;

//Questions list
var questionsList = [{
  question: "1. What’s the name of the bar the boys want to open? ",
  answer: "Puzzles"
}, {
  question: "2. In what year is Ted talking to his kids and narrating the episodes? ",
  answer: "2030"
}, {
  question: "3. What’s the name of the gang’s most familiar bartender? ",
  answer: "Carl"
}, {
  question: "4. What is the name of Barney’s brother?",
  answer: "james"
}, {
  question: "5. How many times is Marshall allowed to slap Barney? ",
  answer: "5"
}, {
  question: "6. What is Barney’s most hated nickname? ",
  answer: "swarley"
}, {
  question: "7. Where does Robin move at the beginning of season 4? ",
  answer: "japan"
}, {
  question: "8. What’s the name of Lily and Marshall’s first son? ",
  answer: "Marvin"
}, {
  question: "9. What university did Ted, Marshall and Lily all go to? ",
  answer: "Wesleyan"
}, {
  question: "10. What is the mother’s name? ",
  answer: "Tracy"
}]

//Function for quiz
function quiz(q){
  var userAnswer = readlineSync.question(q.question);
  if(userAnswer.toUpperCase() === q.answer.toUpperCase()){
    score++;
    console.log(right("Right !!"));
  } else {
    score--;
    console.log(wrong("Wrong!") + " The correct answer was ", right(q.answer));
  }
  console.log("Your current score is ", score);
}

//For passing questions in the function
for(let i = 0 ; i < questionsList.length ; i++){
  quiz(questionsList[i]);
}

//Displaying final score
if(score >= 0){
  console.log(right("Yay! "));
}
console.log("Your final score is ", score);