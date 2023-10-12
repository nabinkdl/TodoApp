
const TodoList = [];

function renderTodo(){
    let totalList = '';
    for(i=0; i<TodoList.length; i++){
        const todoObj = TodoList[i];
        // const name = todo.name;
        // const dueDate = todo.dueDate;

        // const {name} = todo;
        // const {dueDate} = todo;
        var {name, dueDate} = todoObj;

        const html = `<div class="todo-grid"><div>${name} </div><div>${dueDate}</div>
        
        <button class="deltBtn" onclick=" deleteTodo(${i});
        ">Delete</button></div>`;
        totalList += html;
        
    }
    document.querySelector('.js-todoList').innerHTML = totalList;
    };


    function addInput(){
        const inputData = document.querySelector('.js-input');
        const inputDate = document.querySelector('.js-dueDate');
        var name = inputData.value;
        let dueDate = inputDate.value;

        

        if (name === '' || dueDate === ''){
            alert('Enter valid todoName and Date. !!');
            console.log( typeof dueDate);
        }
        else{
        TodoList.push(
        {//name:name, 
        //dueDate:dueDate  
        name , dueDate});
        // inputData.value = '';
        // inputDate.value='';
        renderTodo();
        inputData.value = '';
        inputDate.value='';
        console.log(TodoList);}
        
    };


    function deleteTodo(i) {

        console.log(i);
        const confirmDelete = confirm(`Are you sure you want to delete? `);
        if (confirmDelete) {
            TodoList.splice(i, 1);
            renderTodo();
        }
    }



    
    