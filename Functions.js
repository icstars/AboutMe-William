function log (text){
    console.log(text)
}

log("Will")





// You can have multiple functions
// Parameter is the place for the input | the place holder
// Argument is an actual value we send to a function

// Declaring a function 2 examples
// tradtional || function name (){}
// function expression || let name = function (a,b){}
// Arrow Function || let name3 = (a,b) => {return a + b}

// Var is ALWAYS going to be Global Scope. We use a 'for loop" to declare a variable.

function loopArray(arr){
    for (char of arr){
        console.log(char)
    }
}
let nums = [1,2,3,4]

let names = ["Romeo", "Ly","Branden"]

loopArray(nums)
loopArray(names)

function vendingMachine(money, item) {
    let snacks = ["Pepsi", "Hersheys", "Snickers", "Reeses", "Cheetos", "Water", "Coke"];
    if (money === "$2.00") {
        for (snack of snacks) {
            if (item === snack) {
                return snack;  
            }
        }
        return "Doesn't Exist"
    }
}
 console.log(vendingMachine("$2.00", "Water"))