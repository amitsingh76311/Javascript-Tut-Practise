// if statement and else statement :  syntax:--

// if(true){
// console.log("loggedin");
// }else{
//     console.log("not looged in");

// }

const isUserLoggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("Temperature is greater than 50");
}

// console.log("Execute");
//<, >, <=, >=, ==, !=, ===, !== comaparasion operator for checking purpose:-

const score = 200;

if (score > 200) {
  let power = "fly";
  console.log(`user power :- ${power}`);
}
// console.log(`user power :- ${power}`);

const balance = 1000;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 700) {
  console.log("less than 700");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1100");
};

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
