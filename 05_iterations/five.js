const coding = ['js','java','python','ruby'];


// simple callback functions we are using below:--

coding.forEach(function(val){
    console.log(val);
    
})

// below we are using arrow functions:--

coding.forEach( (item)=> console.log(item));


// another ways

function printMe (item){
    console.log(item);   
}
coding.forEach(printMe);



coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} );

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
});


 const language = ["js", "ruby", "java", "python", "cpp"]



 // in foreach function it will not retrun any thing if you are retrun it will give undefined:------

const values = language.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);