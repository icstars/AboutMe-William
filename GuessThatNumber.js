function attempts() {
  let i = 1;
  let number = Math.floor(Math.random() * 100);
  console.log(number);
  alert("Guess a number between 1-100");
  while (i < 10) {
    let guess = prompt(`attempt ${i}`);
    if (guess == number) {
      alert("WINNER WINNER CHICKEN DINNER");
      break;
    } else if (guess < number) {
      alert("The Numba Might Be HIGH Fool TRY AGAIN!!!");
      i++;
    } else if (guess > number) {
      alert("The Guess Was STILL Higher Get It Right This Time");
      i++;
    }
    if (i == 10) {
      alert("SMDH WHAT IS WRONG WITH YOU");
      break;
    }
  }
}

function TryAgainFool() {
  let choice = prompt("YOU REALLY WANT TO PLAY AGAIN?");
  if (choice == "Yes") {
    return true;
  } else if (choice == "No") {
    return false;
  }
}

function chickenNuggets() {
  attempts();
  if (TryAgainFool() == true) {
    chickenNuggets();
  } else {
    alert("Keep Playing You Might Win HAHA");
  }
}

chickenNuggets();
