// function addTwoNumbers(num1,num2){ // this is parameter
//     console.log(num1 + num2);

// };

function addTwoNumbers(num1,num2){ // this is parameter
    let result = num1 + num2;

    console.log(result); // this will print
    
     return result;
     console.log(result); // this will not print beacause of after return
     // this will not executes :-- furthur
     
 
};
  const result = addTwoNumbers(2,4) // => this is argument

  console.log("result : is -", result);


  // another examples :--

  function logedInUserMessage (username){
   return `${username} just logged in`
  }
   logedInUserMessage("Amit")// this will  executes but because of 
  //  we not print anywhere so this will not print how we can be do :--
  console.log(logedInUserMessage("Amit"));
  

  function calculatePrice (...num){
    return num
  }
  console.log(calculatePrice(200,400,600));


  const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
});

const myArray = [2,4,6];

function myNewArray (getArray){
  return getArray[1]
};

console.log(myNewArray(myArray));
console.log(myNewArray([200, 400, 500, 1000]));// another way

  