//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //name iife
    console.log(`DB connected`);
})();

( (name)=>{
    //unnamed iife
    console.log(`DB connected 2 ${name}`);
    
} )('shaif');
// chai()

