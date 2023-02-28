console.log("4.	Write a function that greets a person by his/her name (e.g. “Hi, John!”).")
console.log(prompt("What is your name?"))

console.log("3.	Write a function that finds an area of a circle given its radius (PI=3.14).");
let radius = prompt("Enter a radius of a circle");
let area = 3.14*radius;
console.log("Area of the circle is ", area);

console.log("11. Write a function to check whether a given number is even or odd.")
let number = prompt("Enter an integer number");
if (number%2 == 0){
    console.log("This number is even");
} else {
    console.log("This number is odd");
}