// ################# JS SIMPLE ALERT EXAMPLE 001 #################
// var name = "Jack";
// var age = 23;

// var message = "Hi, my name is " + name + " and I am " + age + " years old!";
// alert(message);

// ################# JS COMPARISON OPERATORS ACHOMBO EXAMPLE 002 #################
// var myAccountBalance = 400;
// var achombo = 1450;
// var coupon = 500;

// if (achombo <= myAccountBalance) {
//   myAccountBalance -= achombo;
//   console.log("Take a seat and enjoy the beans.");
//   console.log("Your balance is " + myAccountBalance + " by the way.");
// } else if (achombo <= myAccountBalance + coupon) {
//   myAccountBalance += coupon - achombo;
//   console.log("Nice to have a coupon. Enjoy!");
//   console.log("You're left with " + myAccountBalance + " by the way.");
// } else {
//   console.log("You too broke bra!");
// }

// ################# JS LOGICAL OPERATORS ACHOMBO EXAMPLE 003 #################
// var pr = 7.9;
// var ns = 8.1;
// var bi = 7.3;

// if (ns > pr && ns > bi) {
//   console.log("NS is cuttest!");
// } else if (pr > ns && pr > bi) {
//   console.log("PR is cuttest!");
// } else if (bi > ns && bi > pr) {
//   console.log("BI is cuttest!");
// }

// ################# JS & ARRAYS EXAMPLE 004 #################
//NOTE: Never use mixed data types in an array.
// var racerNames = ["Mac", "Tyler", "Jess"];
// var offroad = [];

// offroad.push(racerNames[0]);

// var index = offroad.indexOf("Mac");
// console.log(offroad);
// if (index > -1) {
//     offroad.splice(index, 1);
// }

// console.log(offroad);

// ################# JS LOOPS (Looping through an Array) EXAMPLE 005 #################

// var bibleBooks = ["Mark", "Matthew", "Luke", "John"];

// for (var x = 0; x < bibleBooks.length; x++) {
//     console.log(bibleBooks[x]);
// }

// ################# JS FUNCTIONS (Calculating Areas) EXAMPLE 006 #################
function area(length, width) {
  return length * width;
}

var rectanglesAreas = [];

rectanglesAreas.push(area(15, 10));
rectanglesAreas.push(area(16, 7));
rectanglesAreas.push(area(12, 7));

console.log(rectanglesAreas);

// ################# JS FUNCTIONS (if else application) EXAMPLE 007 #################
var accountBalance = 1800;

function makeTransaction(costPrice) {
  if (costPrice <= accountBalance) {
    accountBalance -= costPrice;
    console.log(costPrice + " Purchase Successful");
    console.log("Account balance: " + accountBalance);
  } else {
    console.log("Insufficient funds to purchase " + costPrice + " item.");
  }
}

makeTransaction(300);
makeTransaction(450);
makeTransaction(1600);

//This time lets store the function in a variable.
//So notice I didn't put a function name after keyword function in this case.
// var transaction = function (costPrice) {
//     if (costPrice <= accountBalance) {
//         accountBalance -= costPrice;
//         console.log(costPrice + " Purchase Successful");
//         console.log("Account balance: " + accountBalance);
//     } else {
//         console.log("Insufficient funds to purchase " + costPrice + " item.");
//     }
// }

// transaction(250);
// transaction(150);
// transaction(700);
// transaction(200);

// var printCustomerName = function (first, last) {
//     console.log("First Name: " + first + "\nLast Name: " + last);
// }

// var purchaseOperations = [];
// purchaseOperations.push(printCustomerName("John", "Doe"));
// purchaseOperations.push(transaction(100));
// purchaseOperations.push(transaction(450));
// purchaseOperations.push(transaction(275));

// console.log(purchaseOperations);

// ################# JS OBJECTS EXAMPLE 008 #################
//Create an Object in 4 different ways.
// var student0 = {
//     firstName: "Post",
//     lastName: "Malone",
//     age: 23,
//     greetings: function () {
//         return "Hi, I'm " + this.firstName + " " + this.lastName + " and I'm " + this.age + " years old.";
//     }
// };

// console.log(student0.greetings());

// var student1 = new Object();
// student1.firstName = "James";
// student1.lastName = "Bond";
// student1.age = 28;

// var student2 = {};
// student2.firstName = "Ansu";
// student2.lastName = "Fati";
// student2.age = 17;

// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);

// for (x = 0; x < students.length; x++) {
//     console.log(students[x]);
// }

// ################# JS OBJECTS EXAMPLE 009 #################
//Function which is an Object. Contructor function?
var students = [];

function student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greeting = function () {
    return (
      "The name's " +
      this.lastName +
      ", " +
      this.firstName +
      " " +
      this.lastName +
      "."
    );
  };
}

var s1 = new student("James", "Bond", 49);
console.log(s1);
console.log(s1.greeting());

// ################# JS OBJECTS EXAMPLE 010 #################
//Let's try a constructor function for cars.
//I mean a reusable object right.

var automobiles = [];

function Car(manufacturer, type, description) {
  this.company = manufacturer;
  this.model = type;
  this.description = description;
  this.info = function () {
    return (
      this.company +
      " manufactured the " +
      this.model +
      " as " +
      this.description +
      " car."
    );
  };
}

var car1 = new Car("Peujot", "e-Legend", "concept-electric");
var car2 = new Car("Ford", "Mustang-GT", "Muscle");

console.log(car1.info());
console.log(car2.info());

automobiles.push(car1);
automobiles.push(car2);
automobiles.push(new Car("Lamborghini", "Urus", ""));
console.log(automobiles);

for (i = 0; i < automobiles.length; i++) {
  //List the elements pushed onto the automobiles array.
  console.log(automobiles[i]);
}
for (i = 0; i < automobiles.length; i++) {
  //List the .info property(function in this case) of each of the objects keys in the automobiles array.
  console.log(automobiles[i].info());
}
