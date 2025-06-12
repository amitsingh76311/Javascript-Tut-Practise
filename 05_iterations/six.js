// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);


// in this we have to read special hoc functions that's name filter method:-

// it will give you conditions based if true then it will retrun and show 

// in the ui page or we can say in show to user 

// suppose one basics  examples  are :--

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// i have to checkd in this array only above greater than 4 how 
// many num are there :-- how we can do below solutions are there

  const digit= myNums.filter((num)=>{
     return num > 4
  });
//   console.log(digit);
  
const values = myNums.filter(num => num > 4);
// console.log(values);  // Outputs: [5, 6, 7, 8, 9, 10]


// how we can do by for each for this above solutions :--

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];

myarr.forEach( (num)=>{
  if(num > 4){
    newNums.push(num)
  };
});
console.log(newNums);

// another examples of an filter method based on conditions:--

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk)=> bk.genre === 'History');
//   console.log(userBooks);

userBooks= books.filter((bk)=> {
    return bk.publish >=1980 && bk.genre == 'History' 
});
console.log(userBooks);

  


