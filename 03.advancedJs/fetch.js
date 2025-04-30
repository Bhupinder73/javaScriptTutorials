fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data));

// fetch('https://www.google.com')
// .then(res => res.text())
// .then(data => console.log(data));