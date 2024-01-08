let arr = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

//console.table(arr); // Displays array as a table

// EVENT LISTENERS

// The compenent listening for a certain event

/* TYPES OF EVENTS
  click 
  keydown
  keyup
  mouseover
  mouseleave
  resize 
  sumbmit
  
  */

window.addEventListener("click", function () {
  console.log("Hello World");
});

console.log(arr[playerY][playerx]);

arr[playerY][playerX] = 1;

playerY += 1; // adding to the table

arr[playerY][playerX] = 1;

let playerX = 2;
let playerY = 2;
let point = 0;
let pointX = Math.floor(Math.random() * arr[0].length);
let pointY = Math.floor(Math.random() * arr.length);

function render() {
  console.clear();
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++)
      if (row == pointY && column == pointX) {
        arr[row][column] = 2;
      } else if (row == playerY && column == playerX) {
        arr[row][column] = 1;
      } else {
        arr[row][column] = 0;
        if ((playerX == pointX) & (playerY == pointY)) {
          pointX = Math.floor(Math.random() * arr[0].length);
          pointY = Math.floor(Math.random() * arr.length);
          point++;
        }
      }
    console.log(point);
  }
  console.table(arr);
}

render();

window.addEventListener("keydown", function (e) {
  //render();
  console.log(e.key);

  if (e.key == "w") {
    //going up
    // if the key we pressed is 'w'
    playerY--; // lower the players y
    render(); // we render the map again to show the changes we made
  } else if (e.key == "d") {
    //going right
    playerX++;
    render();
  } else if (e.key == "s") {
    //going down
    playerY++;
    render();
  } else if (e.key == "a") {
    //going left
    playerX--;
    render();
  }
});
