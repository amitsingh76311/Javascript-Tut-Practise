// for of loop 


// ["", "", ""]
// [{}, {}, {}]

// syntax of for loop :--

const arr = [1,2,3,4,5]

for (const num of arr) {
 console.log(`The value of num is :- ${num}`);
 
};

// in strings :--

const greeting = "Hello World";

for(const greet of greeting){
    console.log(`Each char is ${greet}`);
    
}

// Maps objects :--

const map = new Map();
 
map.set('IN','India');
map.set('USA','Unites State Of America');
map.set('UK','United Kingdom');
map.set('FR','France');

console.log(map);

for (const [key , value] of map) {
     console.log(`the code of Country :--${key} and The Name is :-${value}`);
     
};

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value); in this case we cant itterate of this myObject :-
    
}
