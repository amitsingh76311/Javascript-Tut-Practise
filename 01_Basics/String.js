const name = "Amit";
const repoCount = 5;
console.log(name + repoCount + "Value");

console.log();

const gameName = new String("pubg-Mobile");
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("u"));

const newString = gameName.substring(0,8);
console.log(newString);

const newGame = gameName.slice(-11, 2)
console.log(newGame);
// console.log(gameName.length);

const newStr = "   Amit   ";

console.log(newStr);
console.log(newStr.trim());

const url = "https://amit.com/amit%20kumar";

console.log(url.replace('%20','-'));

console.log(url.includes("amit"));

console.log(url.includes("singh"));

const para = "How are you";
console.log(para.split(" "));

let str = 'Geeks for Geeks'
let array = str.split("for");
console.log(array);















