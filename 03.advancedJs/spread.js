//spread operator:-
let arr1 = [1,2,3,4,5];
let arr2 = [arr1];
let arr3 = [...arr1];

console.log(arr1);
console.log(arr1.length);
console.log(arr2);
console.log(arr2.length);
console.log(arr3);
console.log(arr3.length);

//rest operator:-
function sum(...numbers){
    return numbers.reduce((acc,curr) => acc + curr, 0);
}
console.log(sum(1,2,3,4)); //10

//array destructuring
const [first, second, ...rest] = [1,2,3,4,5];
console.log(rest); //[3,4,5]