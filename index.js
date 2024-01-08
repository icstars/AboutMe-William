let y = "Hello World"
console.log(y);

y = "Hello i.c.stars";
console.log(y); 

console.log(y==="Hello i.c.stars")

let x; 
console.log(x);

/// sometimes we want to just check if a variable has a value
if(y){console.log("this code block will execute")} else {console.log("This is a false block")}

//debugger;
let i = "Hello";
console.log(i)

let dudes = ["Lucycan", "Collin", "Mark", "Cortez"]

console.log(dudes[2]);

for(let j = 0; j < dudes.length; j++){
    console.log(dudes[j]);
}

//Rock, Paper, Sisccors


let score = 0;
// let numbOfPlays = Number.parseInt( prompt("How many times do you want to play rock paper scissors?"));

function checkWinner(){
//Players Choice
const choices = ["rock", "paper", "scissors"];
//Get a computer choice
let computer = choices[Math.floor(Math.random() * choices.length)];
//Take in user input
let userInput = prompt("Rock, Paper, Scissors").toLowerCase();
//Check what was given
console.log("User:" + userInput + " Computer: " + computer);
//Check if user actually typed rock, paper, or scissors

if(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
    alert("Type Rock, Paper, Scissors");
    return
}

//Compare user choice to computer choice & determine game results
if(userInput === "rock" && computer === "rock" || userInput === "paper" && computer === "paper"|| userInput === "scissors" && computer === "scissors"){
    alert("You Tie");
    console.log("Tie")
} else if(userInput === "rock" && computer === "paper" || userInput === "scissors" && computer === "rock"|| userInput === "paper" && computer === "scissors"){
    alert("You Lose");
    console.log("User lost")
} else {
    alert("You Win");
    console.log("User won")
    //track how many times the user won
    score++
}
}
//loop through the game how many times the user said
for(let i = 0; i < numbOfPlays; i++){
    checkWinner();
}
//display user score
alert("User final score: " + score)





//Computer Choice

//Decision

// Variable - container for data to be used later 

//EXAMPLE
let name = "Romeo"
name = 'Collin'
console.log(name)

let num = 7 
num = "12"
let num2 = 1
console.log(num + name)
console.log(num+num2)

let name2 = "Will"
let food = "Tacos"
let sentence = "hi my name is" + " " + name + " " + "and i love" + " " + food 
console.log(sentence)

// Array - A list of data types

let array = [1,2,3,4] // So 5 will replace 3 because it starts in the zero index
array[2] = 5
console.log(array[2])

let names = ["Will", "Lebron", "Tacos"]
names[0] = "Chicken" // This will replace "Will" with "Chicken"
console.log(names[names.length-1]) // This is just to get the last variable.

 // FOR LOOP Traditional
  let names = ["Haylee", "Hi","Me","You"]
  for (let i = 0; i < names.length; i ++){
    console.log(name[i])
  } // This Shows all the list of names

  //Another Way 
  for(char of names){
    console.log(char)
  }

  // While LOOP
  let j = 0
  while(j < names.length){
    console.log(names[j]); j ++ 
  }
//Conditionals
let name3 = "Will"

if (name == "Will"){
console.log("Hi Will")
} else if(name === "Will"){
console.log("Hi Will")
}else{console.log("who are you?")

}

// FUNCTION - A reusable code 
// DECALARE WITH A 

// Example: function call (input){output}

function addNumbers(a,b){
    return a + b
}

let result = addNumbers(5,5)
let result2 = addNumbers(10,4)
let result3 = addNumbers(9,9)

console.log(result, result2, result3)

