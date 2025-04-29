function greeting(name){
    console.log(`hello ${name}`);
}

function getUserInput(callback){
    let name = prompt('Enter your name: ');
    callback(name);
}

getUserInput(greeting);