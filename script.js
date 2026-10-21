// Selectors
const icon = document.querySelector('.icon');
const header = document.querySelector('.header');
const h2 = document.querySelectorAll('h2')
const headerA = document.querySelectorAll('header a')
const aiBtn = document.querySelector('.Askai-btn');
const profileIcon = document.querySelector('.icon-user');
const logoBlack = document.querySelector('#logoBlack');
const logoWhite = document.querySelector('#logoWhite');
const menuIcon = document.querySelector('.icon-menu');


console.log(headerA)




// if(window)

window.addEventListener("scroll", () => {
  if(window.scrollY >= 10){
    header.style.backgroundColor = "white";
    // header.style.position = "sticky";
    // header.classList.add('sticky');

    headerA.forEach((item) =>{
       item.style.color = "black";
    })

    aiBtn.style.borderColor = "black"
    profileIcon.style.fill = "black"
    logoWhite.classList.add('hidden')
    logoBlack.classList.remove('hidden')
    menuIcon.style.fill = "black"

   

  } else {
    header.style.backgroundColor = "#673de6";
    headerA.forEach((item) =>{
       item.style.color = "white" 
    })
    aiBtn.style.borderColor = "white"
    profileIcon.style.fill = "white"
    logoWhite.classList.remove('hidden')
    logoBlack.classList.add('hidden')
    menuIcon.style.fill = "white"
  }
})






// console.log("The Javascript file is connected")

// let or const
// Variable names are written in camelCase

// Strings

// let myName = "Samuel";
// const firstName = "Samuel";

// myName = "Habibat";

// // firstName = "Olivia";
// // console.log("Variable const", firstName);

// // Numbers

// // Boolean

// const isAdult = true;
// const isYoung = false;

// // Array

// const classHeight = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const schoolData = [10, "20", true, 40, false, 60, 70, "Ade", 90, 100];

// // Object

// const classHeightInfo = {
//   firstName: "Samuel",
//   Age: 1000,
//   skinColor: "Dark",
//   job: "Fullstack Developer",
// };

// const detailedHeightInfo = [
//   {
//     firstName: "Samuel",
//     height: 10,
//   },
//   {
//     firstName: "Olivia",
//     height: 20,
//   },
//   {
//     firstName: "Habibat",
//     height: 30,
//   },
//   {
//     firstName: "Isreal",
//     height: 40,
//   },
//   {
//     firstName: "Das",
//     height: 50,
//   },
//   {
//     firstName: "Dorin",
//     height: 60,
//   },
//   {
//     firstName: "Daniel",
//     height: 70,
//   },
//   {
//     firstName: "John",
//     height: 80,
//   },
//   {
//     firstName: "Regina",
//     height: 90,
//   },
//   {
//     firstName: "Kent",
//     height: 100,
//   },
// ];

// Aritemetic Operators + - * / %

// const ageSamuel = 1000;
// const accountBalance = 20;
// const adeAge = 55;

// const totalAge = ageSamuel % adeAge;

// console.log(totalAge);

// const divisionRemainder = 10 % 2;

// console.log(divisionRemainder);

// const schoolName = "Seamfix";
// const isDark = false;
// const totalStudents = "55";

// const addAge = adeAge + totalStudents;
// const subAge = adeAge - totalStudents;

// const newAge = '55' / false;

// console.log(addAge, subAge);

// console.log(newAge)

// Comparison Operator ==, ===, <, >, >=, !=, <=

// console.log(adeAge != totalStudents)

// console.log(adeAge === totalStudents)

// const check1 = adeAge < totalStudents // false

// const check2 = adeAge === totalStudents // false

// console.log(check1 && check2)

//  And operator

// true && false = false
// true && true = true
// false && false = false
// false && true = false

// Or operator ||

// const travelCost = 20;
// const workCost = 40;

// const cost1 = travelCost > workCost; // false
// const cost2 = workCost != travelCost // true

// console.log(cost1 || cost2)

// true || false = true
// true || true = true
// false || false = false
// false || true = true

// Not operator !

// console.log(!cost1) // true
// console.log(!cost2) // false

// if else statement

// if (travelCost < workCost){
//   console.log("Travel on a vacation.")
// } else {
//   console.log(" Do not travel, go to work.")
// }

// const daxAge = 55;

// if(daxAge < 100){
//   console.log("Dax is a young boy")
// } else {
//   console.log("Dax is an Adult")
// }

// if(daxAge >= 100){
//   console.log("Dax is an Adult")
// } else if (daxAge <= 50){
//   console.log("Dax is young")
// } else{
//   console.log("Dax is middle Age")
// }

// // functions

// const currentTvMode = "on";

// function powerSwitch (a) {
//   if(currentTvMode === "on"){
//     console.log(a - 1)
//     console.log("The tv is switch off.")
//   } else {
//     console.log(a)
//     console.log("The tv is switched on")
//   }
// }

// const electricitySrc = 1;

// powerSwitch(electricitySrc);

function calculator (a, b, c) {
  if(b == "+"){
    const result = a + c;
    console.log(result)
  } else if (b == "-"){
    const result = a - c;
    console.log(result)
  } else if (b == "*"){
    const result = a * c;
    console.log(result)
  } else if (b == "/"){
    const result = a / c;
    console.log(result)
  } else {
    console.log("Input a correct aritemetic symbol.")
  }
}

calculator(10, "+", 10);

// calculator(200, "/", 20);

// calculator(50, "+", 10)

// We need to see logical operators at work in the next class
// const rainingDays = 20;
// const dryDays = 1;
// const benchmark = 10;

// const rainingSeason = rainingDays > benchmark; //true
// const drySeason = dryDays > benchmark //false

// if(rainingSeason && drySeason){
//   console.log("We are in a good season")
// } else{
//   console.log("We are in a bad season")
// }

// Practicals
// JAVASCRIPT PRACTICE QUESTIONS

// QUESTION 1: STUDENT RESULT CHECKER

// A student scored 65 in an exam.

// Tasks:

// 1. Create a variable called score and assign it the value 65.
// 2. Use an if...else statement to check the score.
// 3. If the score is 50 or above, display:
//    "Congratulations! You passed."
// 4. Otherwise, display:
//    "Sorry, you failed."

// const score = 50;

// function resultChecker(a) {
//   if (a >= 50) {
//     console.log("Congratulations! You passed.");
//   } else {
//     console.log("Sorry, you failed.");
//   }
// }

// resultChecker(score);

// ---

// QUESTION 2: SHOPPING CART

// A customer bought the following items:

// - Rice
// - Milk
// - Bread
// - Eggs

// Tasks:

// 1. Store the items in an array called cart.
// 2. Display the total number of items in the cart.
// 3. Display the first item in the cart.
// 4. Display the last item in the cart.
// 5. Add "Butter" to the cart.
// 6. Display the updated cart.

// const cart = ["Rice", "Milk", "Bread", "Eggs"];

// // Array.lenght

// const itemsNumber = cart.length;

// console.log(itemsNumber);

// const firstItem = cart[0];

// console.log(firstItem);

// const lastItem = cart[cart.length - 1];

// console.log(lastItem);

// const newCart = cart.push("Butter");

// console.log(cart);

// ---

// QUESTION 3: STUDENT PROFILE SYSTEM

// Create an object called student with the following information:

// Name: Sarah
// Age: 16
// Class: SS2
// Is Registered: true

// Tasks:

// 1. Display the student's name.
// 2. Display the student's class.
// 3. Check if the student is registered.
// 4. If the student is registered, display:
//    "Registration Complete"
// 5. Otherwise, display:
//    "Registration Pending"

// const studentProfile = {
//   name: "Sarah",
//   age: 16,
//   class: "SS2",
//   isRegistered: true,
// };

// const studentProfile2 = {
//   name: "Roy",
//   age: 15,
//   class: "SS1",
//   isRegistered: false,
// };

// const studentName = studentProfile.name;

// const studentClass = studentProfile.class;

// console.log(studentName, studentClass);

// const registrationChecker = (value) => {
//   if (value) {
//     console.log("Registration Complete");
//   } else {
//     console.log("Registration Pending");
//   }
// };

// registrationChecker(studentProfile.isRegistered);

// registrationChecker(studentProfile2.isRegistered);

// ---

// QUESTION 4: EMPLOYEE SALARY CHECKER

// Create a function called calculateSalary.

// The function should accept:

// - Employee name
// - Monthly salary

// Tasks:

// 1. Display the employee's name.
// 2. If the salary is 100,000 or more, display:
//    "High Income Earner"
// 3. Otherwise, display:
//    "Regular Income Earner"

// Example:
// calculateSalary("John", 120000);

// Expected Output:
// Employee: John
// High Income Earner

// const salaryChecker = (y, i) => {
//   const employeeName = y;
//   const salary = i;

  // if (i >= 100000) {
  //   console.log("You are a high income earner ");
  // } else {
  //   console.log("You are a regular income earner");
  // }
  // console.log(employeeName);

  // "The name of this employee is ..., and he is a high income earner with ₦... as the salary."

  // Template literals
//   if (i >= 100000) {
//     console.log(`The name of this employee is ${employeeName}, and he is a high income earner with ₦${salary} as the salary.`);
//   } else {
//     console.log(`The name of this employee is ${employeeName}, and he is a regular income earner with ₦${salary} as the salary.`);
//   }
  
// };

// salaryChecker("John", 120000);

// salaryChecker("Habibat", 90000);

// ---

// MINI CHALLENGE: STUDENT REPORT SYSTEM

// Create an object with the following information:

// Name: David
// Age: 15
// Subjects: Math, English, Biology
// Score: 78

// Tasks:

// 1. Create a function that accepts the student object as a parameter.
// 2. Display the student's name.
// 3. Display all the student's subjects.
// 4. Use an if...else statement to determine whether the student passed or failed.
//    - 50 and above = Pass
//    - Below 50 = Fail

// Expected Output:
// Student: David
// Subjects: Math, English, Biology
// Result: Pass




// LOOPS
// For loop

// let a = 1

// const y = ++a; // a + 1

// console.log("y = ", y)


for (let i=0; i < 15; i = i + 2){
  console.log(`This is bird ${i}`)
}

// ForEach loop

const heights = [20, 30, 50, 60, 70];

const convertedHeights = [];

heights.forEach((height, i) => {      // Items per loop run & Index of the loop or item
  if(i + 1 == 3){
    const conversion = height / 100;
  convertedHeights.push(conversion)
  } else {
    return;
  }
  
})

// console.log(convertedHeights)


// // JSON DATA
// const backendData = { "status": 200, "data": { "id": 101, "name": "Sarah Jenkins", "role": "Lead Designer" } }


// // OBJECT
// const studentProfile = {
//   name: "Sarah",
//   age: 16,
//   class: "SS2",
//   isRegistered: true,
// };

// console.log(studentProfile.age)


// const fetchBackendData = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .catch((error) => console.log("Error fetching data:", error))

// console.log(fetchBackendData)

// fetchBackendData.forEach((data, index) => {
//   return console.log(`user ${index + 1}: ${data.name}, Email: ${data.email}`)
// })


// [ { "id": 1, "name": "John", "role": "Dev" }, { "id": 2, "name": "Mary", "role": "UX" }, { "id": 3, "name": "Alex", "role": "PM" } ]


// { "user": { "name": ["John Doe", "Jane Smith", "Alex Johnson"], 
//             "contact": { "email": "john@mail.com", 
//               "city": "Lagos" } 
//             } 
// }



// const firstPerson = "A"
// const secondPerson = "B"
// const thirdPerson = "C"


// console.log(firstPerson)

// setTimeout(
//   () => {
//     console.log(secondPerson)
//   }, 3000
// )

// const forthPerson = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("D")
   
//   }, 5000)
// })

//  console.log(forthPerson)

// console.log(thirdPerson)


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {

//       const data = response.json();
//       console.log(data)

//         return response.json();

//     })
//     .then((users) => {

//         console.log(users);

//     })
//     .catch((error) => {

//         console.log("error:", error);

//     });


// async function greet() {

//     return "Hello Students";

// }

// console.log(greet())

// async function getUsers() {

//     try {

//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const users = await response.json();

//         console.log(users);

//     } catch(error) {

//         console.log(
//             "Failed To Load Users"
//         );

//     }

// }

// getUsers();


// const getUser2 =  async () => {
//   try{
//     const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const users = await response.json();

//         console.log(users);

//   } catch(error){
//     console.log(error.message)
//   }
// }

// getUser2()