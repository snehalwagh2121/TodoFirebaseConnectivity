//FIREBASE CONNECTIVITY
var firebaseConfig = {
    apiKey: "AIzaSyCbzIzmIPz6FpS7OryWIsyemlY0iHqRnko",
    authDomain: "daily-todos-1aff5.firebaseapp.com",
    databaseURL: "https://daily-todos-1aff5.firebaseio.com",
    projectId: "daily-todos-1aff5",
    storageBucket: "daily-todos-1aff5.appspot.com",
    messagingSenderId: "874579949389",
    appId: "1:874579949389:web:fc5bc045e64bef145ea904",
    measurementId: "G-H1BZ4QGP37"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //auth and db variables assignment
  const auth=firebase.auth();
  const db=firebase.firestore();

//AUTH status CHANGE LOGIC
auth.onAuthStateChanged(user=>{
    if(user){
        console.log('user logged in');
    }else{
        console.log('user logged out');
    }
});


//LOGIN LOGIC
const loginModal= document.querySelector('.login-modal');

if(loginModal!=null && loginModal!=undefined){
    loginModal.addEventListener('submit', e=>{
        e.preventDefault();
        loginUser(auth);
        loginModal.reset();
    });
}

//SIGNUP LOGIC
const signupModal= document.querySelector('.signup-modal');

if(signupModal!=null && signupModal!=undefined){
    signupModal.addEventListener('submit', e=>{
        e.preventDefault();
        signUpUser(auth);
        signupModal.reset();
    });
}
//LOGOUT LOGIC
const logout= document.querySelector('.logout');

if(logout!=null && logout!=undefined){
    logout.addEventListener('click', e=>{
        logOutUser(auth); 
    })
};

//SHOW TODOS in TODO LIST PAGE
db.collection('todo-list').onSnapshot(snapshot =>{
    showTodoList(snapshot.docs);			// these will give us all the docs present in the restaurants collection.
});


//ADD A TODO
const addTodo= document.querySelector('.addTodo');

if(addTodo!=null && addTodo!=undefined){
    addTodo.addEventListener('submit', e=>{
        e.preventDefault();
        addTodoForUser(db, addTodo);
    });
}


//DELETE a TODO
// const deleteTodo= document.querySelector('.delete');

// if(deleteTodo!=null && deleteTodo!=undefined){
//     deleteTodo.addEventListener('click', e=>{
//         console.log('delete clicked')
//         deleteUserTodo(db, deleteTodo);
//     })
// }
// const todos= document.querySelector('.todos');   // no need as it has already been declared in todoPage.js

if(todos!=null && todos!=undefined){
    todos.addEventListener('click', e=>{
        if(e.target.classList.contains('delete')){
                const todoId= e.target.parentElement.children[0].getAttribute('data-id');
                deleteUserTodo(db, todoId);
            }
        })
    }