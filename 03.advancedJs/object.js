let student = {
    rollNo : 573,
    name: 'Preet Singh',
    course: 'Computer Science'
};

console.log(student);
console.log(student.rollNo);
console.log(student['name']);

console.log(typeof student);
console.log(typeof student.rollNo);

delete student.course;
console.log(student);

student.year = 2020;
console.log(student);