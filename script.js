'use strict';
// Strict mode activated. Avoides bugs in code when using strict mode. It will also create visible errors to see.  Comment out strict mode to see if error is seen. Then uncomment. 
// 'use strict';
/*
let hasDriversLicense = false; 
const passTest = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive :D");

const interface = 'Audio';
*/

// functions 

// function logger() {
//     console.log("My name is Sahil");
// }
// call function/ run function/invoke function 
// logger();
// logger();

/*
function fruitProcessor(apples, oranges){
 const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
 return juice;
}
const appleJuice = fruitProcessor(5, 10);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// example 1 function 
function calcAge1(birthYear){
    const age = 2021 - birthYear;
    return age;
}

const myAge = calcAge1(1998);
console.log(myAge);

// example 2 
// function declaration 
function calcAge2(birthYear){
    return 2021 - birthYear;
}
const myAge2 = calcAge2(1998);
console.log(myAge2);

// function expression. Using a variable to show a function as a value. 
const myAge3 = function (birthYear) {
    return 2021 - birthYear;
} 

const showMyAge = myAge3(1998);
console.log(showMyAge);


function myCalAge(birthYear){
    return 2021 - birthYear;
}

const age1 = myCalAge(1998);
console.log(age1);

// Arrow functions 
// example 1
const calcAge4 = birthYear => (1998) - birthYear;
const showAge = calcAge4(1998);
console.log(showAge);

// example 2
const yearsUntilRetirement = (birthYear, firstName) => {
const showmyage2 = 2021 - birthYear;
const retirementAge = 65 - showmyage2;
return `${firstName} retires in ${retirementAge} years.`;
}
const retirementAgeAnswer = yearsUntilRetirement(1998, 'Sahil');
console.log(retirementAgeAnswer);

// calling a fuction inside another function 
function cutFruitPiecies (fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePiecies = cutFruitPiecies(apples);
    const orangePiecies = cutFruitPiecies(oranges);

    const juice = `Juice with ${applePiecies} pieces of apple and ${orangePiecies} piecies of orange`; 
    return juice
}

console.log(fruitProcessor(2, 3));


// coding challenge 1 : js fundamentals part two
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinsData = calcAvg(44, 23, 71);
let koalasData = calcAvg(65, 54, 49);

function CheckWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! \n${avgDolphins} vs ${avgKoalas} `);

    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! \n${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log(`No team wins!`);
    }
}



// Test Data two
dolphinsData = calcAvg(85, 54, 41);
koalasData = calcAvg(23, 34, 27);
console.log(dolphinsData, koalasData);
CheckWinner(dolphinsData, koalasData);
*/


// // Arrays functions
// const friends = ['Micheal', 'Steven', 'Parker'];
// const years = [1998, 1997, 1999, 2021];

// console.log(friends);
// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])

// /* lengh in built function 
// used to display the tatal amount of elements inside the array. */

// console.log(friends.length);

// // function with array example. Function calls produce a value or return a value. 

// const calcAge = function(birthYeah){
//     return 2021 - birthYeah;
// }

// const michealAge = calcAge(years[0]);
// const stevenAge = calcAge(years[1]);
// const parkerAge = calcAge(years[2]);
// console.log(michealAge, stevenAge, parkerAge);

// const ages = [calcAge(years[0]),calcAge(years[1]), calcAge(years[2])];

// console.log(friends[0] + "s age " + ages[0] + "\n" + friends[1] + "s age " + ages[1] + "\n" + friends[2] + "s age " + ages[2]);

/*
// Appends new elements to the end of an array, and returns the new length of the array.
friends.push("Sahil");
friends.push("Bruno");
friends.push("Tyson");
friends.push("Teofimo");
console.log(friends);

// Appends new elements at the begging of an array and returns the length of the array. 
friends.unshift("Ryan");
friends.unshift("Garcia");
friends.unshift("pique");
console.log(friends);

//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// pique is removed. 
const shifted = friends.shift(friends);
console.log(shifted);

// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// teofimo is removed.
friends.pop();
console.log(friends);


'use strict';
// coding challenge
const tips = [125, 555, 46];

const calculatorTips = function calcTip(bill){
    if(bill >= 50 && bill <= 300){
    return (bill * 0.15) + bill;
    } else{
        return (bill * 0.20) + bill;
    }
}



const test1 = calculatorTips(tips[0]);
const test2 = calculatorTips(tips[1]);
const test3 = calculatorTips(tips[2]);
console.log(test1, test2, test3);

const total = [test1, test2, test3];
console.log(total);
*/

// Objects 
// first property is a key
// second property is a value

/*const sahil = {
    firstName: 'Sahil', 
    lastName: 'Ahmed',
    age: 2021 - 1998,
    job: 'technical analyst',
    languages_experienced: ['JavaScript', 'PHP', 'Java', 'Python']
};
*/
// prints the whole object 
// console.log(sahil);
// prints a particular key 
//console.log(sahil.age);
// another example using strings
// console.log("My age is " + sahil.age);
// another way of printing objects
// const nameKey = 'Name';
// const languageKey = '_experienced';
// console.log(sahil['first'+nameKey]);
// console.log(sahil['last'+nameKey]);
// console.log(sahil['languages'+languageKey]);
// const questionAboutSahil = prompt("What do you want to know about Sahil? Choose between firstName, lastName, age, job, and langauges_experienced");
// this will only print what has been entered inside prompt.
// console.log(questionAboutSahil);
/* This will undefined because javascript is looking for a object called questionaboutSahil instead of finding object like fisrtName, secondName, or age.
 This is called dot notation. */ 
// console.log(sahil.questionAboutSahil);
/* The correct way to get the actaul property from the object. 
This is called bracket notation. */ 
// console.log(sahil[questionAboutSahil]);

// some logic for false values/answers
// if(sahil[questionAboutSahil]){
//    console.log(sahil[questionAboutSahil]); 
// } else{
//     console.log("Wrong request! Choose between firstName, lastName, age, job, and langauges_experienced.");
// }

// challenge

/*   Print the arrays in dot notation or bracket notation to get the sentence, 'i have experience in JavaScript, PHP, Java, and Python  lanaguages. My favourite one is Java.'. 
let  challenge = "I have experience in " + sahil.languages_experienced[0] + ", " + sahil.languages_experienced[1] + ", " + sahil.languages_experienced[2] + " and " + sahil.languages_experienced[3] + ". " + "My favourite one is " + sahil.languages_experienced[2] + ".";
console.log(challenge);
// template literals
challenge = `I have experience in ${sahil.languages_experienced[0]}, ${sahil.languages_experienced[1]}, ${sahil.languages_experienced[2]} and ${sahil.languages_experienced[3]}. My favourite one is ${sahil.languages_experienced[0]}.`;
console.log(challenge);

// challenge two

console.log("Normal format string \nI have experience in " + sahil.languages_experienced.length + " languages. My favourite is one Java.");
console.log(`Template literals string \nI have expereince in ${sahil.languages_experienced.length} languages. My favourite one is Java.`)
*/
// research 'mdn operator procedence' on google


// Object Methods
// const sahil = {
//     firstName: 'Sahil', 
//     lastName: 'Ahmed',
//     age: 1998,
//     job: 'technical analyst',
//     languages_experienced: ['JavaScript', 'PHP', 'Java', 'Python'],
//     hasDriversLicense: true,
    // calc age is the property of object of the sahil object. Just like properties above.  
    // function expression or object methods
    // calcAge: function(age){
    //     return 2021 - age;
    // }
    /* age is already written as a property of sahil object. This goes against DRY principles(Don't Repeat Yourself).
    To avoid repeating code, we can use the this keyword to execute code that is already written. 
    in simple words, this refers to the owners object or property of an object in this case (below). */
    // calcAge: function(){
    //    return 2021 - this.age;
    // }
    /*  Using the example above too many times can cause a delay to execute code effciently. So we can use this 
    example of 'this' keyword. This example creates a new property after calcAge method.  */
//     calcAge: function(){
//         this.updatedAge = 2021 - this.age;
//         return this.updatedAge;
//     }

// };

// the new updatedAge property is only created if the calcAge method is called. 
// console.log(sahil.calcAge());

// bracket notation for object sahil that demostrates object calcAge method. 
// console.log(sahil.updatedAge);

// dot notation for object sahil that demostrates object calcAge method. 
// console.log(sahil.updatedAge);

/* normally we assign a variable to the function. 
In objects to write function we create a new property and put function keyword. E.g above
An property is called first when the code has been executed via the server. Then the function then replaces the property. */ 
//  const calcAge = function (age){
//         return 2021 - age;
//     };

    // challenge 
    /* create a method on sahil object and try to print the following statement:
    "Sahil is a 23-year old student, and he has drivers license "*/

    const sahil = {
    firstName: 'Sahil', 
    lastName: 'Ahmed',
    birthYear: 1998,
    job: 'technical analyst',
    languages_experienced: ['JavaScript', 'PHP', 'Java', 'Python'],
    hasDriversLicense: true,
//     challenge: function(birthYear){
//         if(hasDriversLicense == true && birthYear == 23){
//             return sahil.firstName + `is a ` + sahil.age + `- year old student, and he has a drivers license`;
//         } else{
//             return sahil.firstName + `is a ` + sahil.age + `- year old student. However he does not have a drivers license.`;
//         }
//     } revist tenary operator
};

// console.log(sahil.challenge(1998));

// coding challenge #3 fundamentals part 2 
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// Mark obeject
const mark = {
    firstName: "Mark",
    lastName:"Miller",
    height: 1.69,
    weight: 78,
    calcBMI: function(){
        this.markBMI = mark.weight / mark.height ** 2;
        return this.markBMI;
    }
};

// John object
const john = {
    firstName:"John",
    lastName:"Smith",
    height:1.95,
    weight:92,
     calcBMI: function(){
        this.johnBMI = this.weight / this.height ** 2;
        return this.johnBmi;
    }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.markBMI);
console.log(john.johnBMI);

