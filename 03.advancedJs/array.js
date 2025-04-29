let myArr = [1, 'Coding Course', null, true, {channel: 'apna channel', subs: 2000}];

console.log(myArr);
console.log(myArr[4].subs);

for(let i =0; i<5;i++){
    console.log(myArr[i]);
}

console.log(typeof myArr);

let foods = ['bread', 'rice', 'meat', 'pizza'];

foods.forEach(function(food, i){
    console.log(food, i);
});

//array methods:-
// isArray()
// length
// push
// pop
// shift/unshift
// sort