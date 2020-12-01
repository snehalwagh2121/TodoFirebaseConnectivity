const login=document.querySelector('#login');
const signup=document.querySelector('#signup');
const container=document.querySelector('.container');
const closeBtn=document.querySelectorAll('.close-Btn')

login.addEventListener('click', e=>{
    container.children[0].classList.add('noDisplay');
    container.children[1].classList.remove('noDisplay');
    container.children[2].classList.add('noDisplay');
});
signup.addEventListener('click', e=>{
    container.children[0].classList.add('noDisplay');
    container.children[1].classList.add('noDisplay');
    container.children[2].classList.remove('noDisplay');
});

closeBtn.forEach(close =>{
    close.addEventListener('click', e=>{
        // console.log('close clicked');
        container.children[0].classList.remove('noDisplay');
        container.children[1].classList.add('noDisplay');
        container.children[2].classList.add('noDisplay');
    })
});

//LOGIN USER FUNCTION DEFINITION
function loginUser(){
    const email= loginModal['login-email'].value;
    const password= loginModal['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred.user.email+' logged in');
        container.children[0].classList.remove('noDisplay');
        container.children[1].classList.add('noDisplay');
        container.children[2].classList.add('noDisplay');
        
        //go to todoPage.html page
        window.location.href='view/todoPage.html';
    }).catch(err=>{
        console.log('err : '+err.message);
    });
}

//SIGNUP USER FUNCTION DEFINITION
function signUpUser(auth){
    const email= signupModal['signup-email'].value;
    const password= signupModal['signup-password'].value;

    auth.createUserWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred);
        console.log(cred.user.email+' created');
        container.children[0].classList.remove('noDisplay');
        container.children[1].classList.add('noDisplay');
        container.children[2].classList.add('noDisplay');
    }).catch(err=>{
        console.log('in catch');
        console.log(err);
    });
}