//C:\Users\EthanOHalloranBell-S\OneDrive - Atlantic TU\Year 2\Front end web development\Lab1>C:\Users\EthanOHalloranBell-S\Desktop\node-v24.13.0-win-x64\node.exe ex2.ts
// Prints a string value
function addition(value: string) {
  console.log("Value is: " + value);
}

// Number variables
let firstVal: number = 42;
let secondVal: number = 1;

// Convert sum to string
let sumOfVals: string = (firstVal + secondVal).toLocaleString();

// Call function
addition(sumOfVals);