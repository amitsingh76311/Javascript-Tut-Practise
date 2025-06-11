
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "amit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "amit"
    if (username === "amit") {
        const website = " youtube"
         console.log(username + website);
    }
     console.log(website);
}

console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // in this case it will not give error 

function addone(num){  // this is function dfination
    return num + 1
}



console.log(addTwo(5)) // it will give error if you above function 
const addTwo = function(num){  // this is function expression
    return num + 2 // it will give error because of hoisting concept
}
