var number = 5;
if(number > 0){
    console.log("positive")

    
} else if(number > 0){
    console.log("Negtive");

} else{
    console.log("Zero");
}




var number = 5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}




var number = 6;
if(number  %2 === 0){
    console.log("Even");
}else{
    console.log("Odd")
}





var age = 20;
if(age >= 18){
    console.log("You Can Vote")
}else{
    console.log("You Cannot Vote");
}





var num1 = 20;
var num2 = 15;
if (num1 > num2){
    console.log(num1 + " Is greater")
}else{
    console.log(num2 + " Is greater")
}



var num1 = 20;
var num2 = 15;
var num3 = 10;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + "  is greater");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is greater");
} else if (num3 > num1 && num3 > num2) {
    console.log(num3 + " is greater");
} else {
    console.log("Some numbers are equal");
}





  var fruits = ["Apple", "Banana", "Mango"];
 fruits.push("Orange");
 console.log (fruits);



var fruits = ["Apple", "Bnana", "Mango", "Orange"];
fruits.pop();
console.log(fruits);




  var students = ["Ali", "Ahmed", "Hamza", "Usman"];
 students.shift();
 console.log(students);



  var students = ["Ali", "Ahmed", "Hamza", "Usman"];
 students.unshift("Ali");
 console.log(students);




var numbers = [10, 20, 30, 40, 50];
if(numbers.includes(30)){
    console.log("30 is Avliable");
}else{
    console.log("30 is not Avliable")
}






for (var index = 1; index <= 10; index++){
    console.log(index);
}


for (var index = 2; index <= 20; index++ ,++index ){
    console.log(index);
}



for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}




var fruits = ["Apple", "Banana", "Mango", "Orange"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}




var numbers = [10, 20, 30, 40];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log(sum);



var numbers = [10, 15, 22, 31, 40, 55];

var count = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}

console.log(count);





var numbers = [-5, 10, -2, 20, 0, 15];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i]);
    }
}



var names = ["Ali", "Ahmed", "Hamza", "Usman"];

for (var i = 0; i < names.length; i++) {
    if (names[i] === "Hamza") {
        console.log("Hamza is available");
    }
}



var  fruits = ["Apple", "Banana", "Mango", "Orange"];

var index = fruits.indexOf("Mango");

fruits.splice(index, 1);

console.log(fruits);



var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

var newFruits = fruits.slice(1, 4);

console.log(newFruits);




var  marks = 75;

if (marks >= 80) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B Grade");
} else if (marks >= 60) {
    console.log("C Grade");
} else if (marks >= 50) {
    console.log("D Grade");
} else {
    console.log("Fail");
}





var cart = ["Laptop", "Mouse", "Keyboard"];


cart.push("Headphones");


var  index = cart.indexOf("Mouse");
cart.splice(index, 1);


console.log(cart);



var numbers = [10, 45, 23, 89, 34];

var max = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);





var numbers = [50, 12, 80, 5, 34];

var min = numbers[0];

for (var  i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min);





var names = ["Ali", "Ahmed", "Muhammad", "Usman"];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
        console.log(names[i]);
    }
}



var products = ["Laptop", "Mobile", "Tablet", "Mouse", "Keyboard"];

var searchProduct = "Mouse";

var found = false;

for (var i = 0; i < products.length; i++) {
    if (products[i] === searchProduct) {
        found = true;
    }
}

if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}




var numbers = [10, 20, 10, 30, 20, 40];

var uniqueNumbers = [];

for (var  i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log(uniqueNumbers);




var numbers = [1, 2, 3, 4, 5];

var reversed = [];

for (var i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log(reversed);




var prices = [100, 250, 50, 300];

var total = 0;

for (var i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

if (total > 500) {
    console.log("You got a discount");
} else {
    console.log("No discount");
}




var students = ["Ali", "Ahmed", "Hamza", "Usman"];

students.unshift("Bilal");
students.push("Hassan");

var index = students.indexOf("Ahmed");
students.splice(index, 1);

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

if (students.includes("Hamza")) {
    console.log("Hamza is available");
} else {
    console.log("Hamza is not available");
}

console.log(students.length);