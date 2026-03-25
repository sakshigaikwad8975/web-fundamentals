// Q1: Even or Odd
// Write a program to check whether a given number is even or odd.
// Print "Even" if the number is divisible by 2, otherwise print "Odd".
let num = 8;
if (num%2 ===0) {
    console.log(`${num} is an even number.`);
}
else{
    console.log(`${num} is not an even number.`)
}

// Q2: Largest of Three Numbers
// Given three numbers a, b, and c, write a program to find and print the largest number.

let a = 4;
let b = 7;
let c = 1;
if (a>b && a>c) {
    console.log(`${a} is largest number.`)
} 
else if (b>a && b>c) {
    console.log(`${b} is largest number.`)
} else {
    console.log(`${c} is the largest number.`)
}