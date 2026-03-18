const readline = require("readline-sync");

let arr = [];

let num = parseInt(readline.question("Enter number of 2D matrices: "));
let rows = parseInt(readline.question("Enter rows: "));
let cols = parseInt(readline.question("Enter columns: "));

for (let i = 0; i < num; i++) {
    arr[i] = [];
    for (let j = 0; j < rows; j++) {
        arr[i][j] = [];
        for (let k = 0; k < cols; k++) {
            arr[i][j][k] = parseInt(readline.question("Enter element: "));
        }
    }
}

console.log("\nArray elements are:\n");

for (let i = 0; i < num; i++) {
    for (let j = 0; j < rows; j++) {
        let row = "";
        for (let k = 0; k < cols; k++) {
            row += arr[i][j][k] + " ";
        }
        console.log(row);
    }
    console.log("");
}