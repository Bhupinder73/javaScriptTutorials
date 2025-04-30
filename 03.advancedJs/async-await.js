//using async
async function myFunction(){  //async function returns a promise
    return 'Hello';
}

//using await
async function fetchData1() {
    let response = await fetch('https://www.google.com');
    let data = await response.text();
    console.log(data);
}

//for exceptions handling:-
async function fetchData() {
    try{
        let response = await fetch('https://www.google.com');
        let data = await response.text();
        console.log(data);
    }
    catch(error){
        console.error('Error', error);
    }
}

//fetch api by using async/await
async function fetchData(url){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
// fetchData('https://www.google.com');