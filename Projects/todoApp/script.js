console.log('starting js');
let todoList = [
    {
        item: 'item one',
        dueDate: '4/10/2023'
    },
    {
        item: 'item two',
        dueDate: '4/10/2023'
    }
];

function addTodo(){
    let inputElement = document.querySelector('#todoInput');
    let dateElement = document.querySelector('#todoDate');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    console.log(todoItem);
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todoContainer');
    let newHtml = '';



    for(let i=0;i<todoList.length;i++){
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item, dueDate} = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        `
        containerElement.innerHTML = newHtml;
    }
   
}