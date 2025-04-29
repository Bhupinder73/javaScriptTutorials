function greeting(){
    console.log('Hello, Welcome!');
}
console.log("before");
setTimeout(greeting, 1000);
console.log("after");


console.log("before");
//as a callback
setTimeout(function (){
    console.log('Hello, Welcome!');
}, 3000);
console.log("after");


//assign to a variable
const multiply = function(a,b){
    return a*b;
}
console.log(multiply(2,3));