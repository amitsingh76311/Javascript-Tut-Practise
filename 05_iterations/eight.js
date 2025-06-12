// Reduce Method examples :--

const num = [1,2,3];

const sum = num.reduce((acc,currval)=>{
    console.log(`acc :${acc} and currval : ${currval}`); 
    return acc+ currval
   
},0);
console.log(sum);



const shoppingCart = [
    {
        coursename : "javascript",
        price : 1000
    },
    {
        coursename : "java",
        price : 1000
    },
    {
       coursename : "React",
       price : 1000
    },
    {
        coursename : "Nextjs",
        price : 1000
    }
];

const totalPriceToPay = shoppingCart.reduce((acc,courseName)=>{
    return acc +courseName.price
},0)
console.log(totalPriceToPay);

