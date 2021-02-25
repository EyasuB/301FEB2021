'use strict'
const prompt = require('prompt-sync')();

/*
Write a program that helps a user choose the correct footwear for the day’s weather based on
the table shown below. If the user enters any other weather type, your program should output
“sneakers”
Weather Footwear
hot sandals
rain galoshes
snow boots
*/
// let weather = prompt("Enter the day's weather please ");
// if (weather === "hot" || weather ==="Hot") {
//     console.log("The appropriate footwear are sandals.");

// } else if (weather === "rain" || weather==="Rain") {
//     console.log("The appropriate foot wear are galoshes");
// } else if (weather === "snow" || weather==="Snow") {
//      console.log("The appropriate foot wear are boots")
// } else {
//     console.log("The appropriate footwear are sneakers");

// }
/*
Write a program that reads from the keyboard a student's name and number of completed
credits and then outputs the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60
c. "Junior" if 60<=credits<90
d. "Senior" if credits>90

*/
// const name = prompt("Enter name please: ");
// const credits = prompt("Enter Credits please");
// if(credits<=29) {
//     console.log("Freshman");

// } else if (credits < 60) {
//     console.log("Sophomore");

// } else if (credits < 90) {
//     console.log("Junior");
// } else {
//     console.log("senior");
// }
/*
Write a program that calculates down payment for a home loan based on following rules.
Cost of House Down Payment
$0 to less than 50K 5% of the cost
$50K to less than 100K $1000 + 10% of (cost - $50K)
$100K to less than 200K $2000 + 15% of (cost - $100K)
$200K and above $5000 + 10% of (cost - $200K)

*/
// const costOfHouse = prompt("What is the cost of the House? ");
// let downPaymewnt;
// if (costOfHouse < 50000) {
//     console.log(`The down Payment will be ${costOfHouse*0.05} dollars.` )
// } else if (costOfHouse < 100000) {
//     console.log(`The downpayment will be ${1000 + 0.1*(costOfHouse-50000)} dollars` )
// } else if (costOfHouse < 200000) {
//      console.log(`The downpayment will be ${2000 + 0.15*(costOfHouse-100000)} dollars` )
// } else {
//      console.log(`The downpayment will be ${5000 + 0.1*(constOfHouse-200000)} dollars` )
// }

/*
A university library that loans book to students, faculty, and the public has a written policy that
determines how long someone may borrow a book before it is due, which is shown on the table
below. Write a defining table and JavaScript program that determines how long a person may
borrow a book.

*/
/*
Solution: The defining table will look like 
Input                   Process                           OutPut
-Status                  -The count of the number of          -Duration for loan
                        book on Hand  (Overdue)              
-Number of Books                        
*/
let status = prompt("What is your Status? ");
let numOfbooksOverdue = Number(prompt("What is the number of books Overdue? "));
if (status === 'student') {
    if (numOfbooksOverdue === 0) {
        console.log("Loan duration in weeks will be 6");
    } else if (numOfbooksOverdue < 3) {
            console.log("Loan duration in weeks will be 4");
        } else if (numOfbooksOverdue >= 3) {
            console.log("Loan duration in weeks will be 2");
        }

}
else if (status === "Faculty") {
    if (numOfbooksOverdue === 0) {
        console.log("Loan duration in weeks will be 12");
    } else if (numOfbooksOverdue < 3) {
            console.log("Loan duration in weeks will be 10");
        } else if (numOfbooksOverdue >= 3) {
            console.log("Loan duration in weeks will be 8");
        }
    
} 
else {
    if (numOfbooksOverdue === 0) {
        console.log("Loan duration in weeks will be 4");
    } else if (numOfbooksOverdue < 3) {
            console.log("Loan duration in weeks will be 3");
        } else if (numOfbooksOverdue >= 3) {
            console.log("Loan duration in weeks will be 2");
        }
}
    

// 




/*
Write a defining table and then a program that determines what time a child should go to bed.
Your program must read a child’s age and the season (winter, spring, summer, or fall) from the
keyboard and output the child’s bedtime according to this table:
Age Season Bed Time
5 or younger summer, fall 8:30 PM
winter, spring 8:00 PM
6 to 12 summer 9:30 PM
winter, spring, fall 8:30 PM
13 and older summer 10:30 PM
winter, spring, fall 9: 30 PM
*/
/*
Input                   Process                             Output 
Child's age             -The combination of season and age  -Time to go to bed
 Seasons                    as a condition
*/
const age = Number(prompt("How old is the child");








var foo = 0;
switch (foo) {
 case -1:
 console.log('negative 1');
 break;
 case 0:
 console.log(0);
 case 1:
 console.log(1);
 break;
 case 2:
 console.log(2);
 break;
 default:
 console.log('default');
}