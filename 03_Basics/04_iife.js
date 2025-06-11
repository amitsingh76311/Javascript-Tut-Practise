// Immediately Invoked Function Expressions (IIFE)


(function dbConnect(){
    // Named IIFE
    console.log(`db coonect`);
    
})();

((name)=>{
    //  Simple IIFE Functions with  Arrow 
    console.log(`db coonected Two ${name}`);
    
})('Amit')