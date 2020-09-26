const username = document.getElementById('username');
const password = document.getElementById('password');
const captcha = document.getElementById('captcha');
const captchaText = document.querySelector('.captacha-box');
const loginBtn = document.querySelector('.login__btn');
const changeBtn = document.querySelector('.change-btn');

const backgrounds = ['red','blue','cyan','green','yellow'];

captchaText.innerText = characters.charAt(Math.floor(Math.random()*characters.length));

window.onload = ()=>{
    let promise = Notification.requestPermission();
    console.log(promise);
}

changeBtn.addEventListener('click',()=>{
    // captcha.
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    let newCaptcha = '';
    for(let i = 0; i<6; i++){
        newCaptcha += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    captchaText.style.backgroundColor=backgrounds[Math.floor(Math.random()*backgrounds.length)];
    captchaText.innerHTML = newCaptcha;
});

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let timeid;
    if(username.value===""){
        timeid = setInterval(timerFunction(username),500);
    }
    
    else if(password.value===""){
        timeid = setInterval(timerFunction(password), 500);
    }
    
    else if(captcha.value===""){
        timeid = setInterval(timerFunction(captcha), 500);
    }

    else if(captcha.value!=captchaText.innerText){
        // console.log(captcha.value,captchaText.innerText);
        timeid = setInterval(timerFunction(captcha), 500);
    }
    
    else{
        myStorage = window.localStorage;
        myStorage.setItem('Username',username.value);
        myStorage.setItem('Password',password.value);
        window.location.href="./landing.html";
    }
    clearInterval(timeid);
});

function timerFunction(element){
    alert(element.getAttribute('name')+" Is empty")
    element.focus();
}

