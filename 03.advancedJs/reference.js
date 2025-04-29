let student = {
    rollNo : 573,
    name: 'Preet Singh',
    course: 'Computer Science'
};

let num1 = 10;
let num2 = num1;

let student2 = student;

console.log(num2);
console.log(student2);

num1 = 20;
delete student.course;

console.log(num2);
console.log(student2);