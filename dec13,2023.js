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

let playerX = 2;
let playerY = 2;

console.log(arr[playerY][playerX]);

arr[playerY][playerX] = 1;

playerY += 1; // adding to the table

arr[playerY][playerX] = 1;

function render() {
  console.clear();
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++)
      if (row == playerY && column == playerX) {
        arr[row][column] = "X";
        arr[row][column] = 0;
      }
  }
}

console.table(arr);

render();

window.addEventListener("click", function (e) {
  //render();
  console.log(e.key);

  if ((e.key = "w")) {
    // if the key we pressed is 'w'
    playerY--; // lower the players y
    render(); // we render the map again to show the changes we made
  } else if (e.key == "d") {
    playerX++;
    render();
  } else if (e.key == "s") {
    playerY++;
    render();
  } else if (e.key == "a") {
    playerX--;
    render();
  }
});
