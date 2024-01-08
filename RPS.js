let arr = ["Rock", "Paper", "Scissors"];
let player = 0;
let computer = 0;
let score = `My Score${player}, Computer Score ${computer}`;

function will() {
  player = 0;
  computer = 0;
  alert(`Rock, Paper, Scissors`);
  while (player != 3 || computer != 3) {
    let playerchoice = prompt("WHAT DO YOU WANT!?");
    let computerchoice = arr[Math.floor(Math.random() * arr.length)];
    if (playerchoice === computerchoice) {
      alert(`YOU REALLY TIED WITH A COMPUTER HAHA`);
    } else if (
      (playerchoice === "Rock" && computerchoice === "Scissors") ||
      (playerchoice === "Paper" && computerchoice === "Rock") ||
      (playerchoice === "Scissors" && computerchoice === "Paper")
    ) {
      alert("CONGRATS");
      player++;
      score = `My Score${player}, Computer Score ${computer}`;
      alert(score);
    } else if (
      (playerchoice === "Scissors" && computerchoice === "Rock") ||
      (playerchoice === "Rock" && computerchoice === "Paper") ||
      (playerchoice === "Paper" && computerchoice === "Scissors")
    ) {
      alert("YOU LOST BADLY HAHA");
      computer++;
      score = `My Score${player}, Computer Score ${computer}`;
      alert(score);
    }
    if (player == 3 || computer == 3) {
      break;
    }
  }
}
