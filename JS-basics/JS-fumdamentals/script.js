// Q1: Even or Odd
// Write a program to check whether a given number is even or odd.
// Print "Even" if the number is divisible by 2, otherwise print "Odd".
let num = 8;
if (num%2 ===0) {
    console.log(`${num} is an even number.`);
}
else{
    console.log(`${num} is odd number.`);
}

// Q2: Largest of Three Numbers
// Given three numbers a, b, and c, write a program to find and print the largest number.

let a = 4;
let b = 7;
let c = 1;
if (a>=b && a>=c) {
    console.log(`${a} is largest number.`);
} 
else if (b>=a && b>=c) {
    console.log(`${b} is largest number.`);
} else {
    console.log(`${c} is the largest number.`);
}

// Q3: Grade System
// Write a program to assign grades based on marks:
// - 90 and above → Grade A
// - 75 to 89 → Grade B
// - 50 to 74 → Grade C
// - Below 50 → Fail

let marks = 91;
if(marks >= 90) {
    console.log(" Grade A");
}
else if(marks >= 75) {
    console.log("Grade B");
}
else if(marks >= 50) {
    console.log("Grade C");
}
else{
    console.log("Fail.");
}

// Q4: Username Validation
// Write a program to check if a username is valid:
// - It must start with a letter
// - It must be at least 5 characters long
// Print "Valid" or "Invalid".

let username = "Sakshi";
let firstChar = username[0];

if (
    (
        (firstChar >= 'a' && firstChar <= 'z') ||
        (firstChar >= 'A' && firstChar <= 'Z')
    ) &&
    username.length >= 5
) {
    console.log("Valid");
} else {
    console.log("Invalid");
}
