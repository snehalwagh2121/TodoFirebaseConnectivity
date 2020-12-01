const todos= document.querySelector('.todos');
logOutUser= (auth)=>{
    auth.signOut().then(()=>{
        console.log('user logged out');
        window.location.href='../index.html';
    }); 
};

showTodoList= (todoListfromDB)=>{
    todos.innerHTML ='';    // added this as when a new todo was added , it was keeping the previos fetched records and was adding all the todos present in the db again. Hence before showing the todo list we need to clear the todo list div.
    if(todoListfromDB.length){
        todoListfromDB.forEach(task => {
            taskData=task.data();

            html=`<li class="todo">
            <span class="task" data-id="${task.id}">${taskData.task}</span>
            <i class="fa fa-trash delete" aria-hidden="true"></i>
            </li>`;
            
            if(todos!=null && todos!=undefined){
                todos.innerHTML +=html;
            }
        });
    }
}

//ADD TODO LOGIC
addTodoForUser=(db, addTodo)=>{
    db.collection('todo-list').add({
        task: addTodo['newTodo'].value
    });
    addTodo.reset();
}

//DELETE TODO LOGIC
deleteUserTodo= (db, todoId)=>{
    db.collection('todo-list').doc(todoId).delete();
}

console.log(db);