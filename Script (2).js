const form = document.getElementById("form");
const form2 = document.getElementById("form2");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const adres = document.getElementById("adres");
const tel = document.getElementById("tel");
const prof =document.getElementById("prof");
const date = document.getElementById("date");
const submit = document.getElementById("submit");
const container = document.querySelector(".container");
const container2 =document.querySelector(".container2");


form.addEventListener("click",appel){
    e.preventDefault();
    appel();
};
form2.addEventListener("submit",appel){
    e.preventDefault();
    appel();
};
    submit.addEventListener("click" , () =>{
        form2.style.display ="block";
        form.style.display = "none";
        
    });

function appel(){
    
    function checkInputs() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        const adres =adres.value.trim();
        const date = date.value.trim();
        const tel = tel.value.trim();
        const prof= prof.value.trim();
    
        
        if(usernameValue === "") {
            setErrorFor(username, 'username cannot be blank');
        } else {
            setSuccessFor(username);
        }
    
    
        if(emailValue === " ") {
            setErrorFor(email, 'Email cannot be blank');
        } else if(!isEmail(emailValue)){
            setErrorFor(email, 'Email is not valid');
        }else{
            setSuccessFor(email);
        }
    
        if(passwordValue === "") {
            setErrorFor(password,'password cannot be blank');
        } else {
            setSuccessFor(password);
        }
    
        if(password2Value === '') {
            setErrorFor(password2, 'password2 cannot be blank ');
        } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'passwords does not match');
        } else {
            setSuccessFor(password2);
        }
    
    
        
        if(dateValue === "") {
            setErrorFor(date, 'username cannot be blank');
        } else {
            setSuccessFor(date);
        }
    
        
        if(profValue === "") {
            setErrorFor(prof, 'username cannot be blank');
        } else {
            setSuccessFor(prof);
        }
    
        
        if(adresValue === "") {
            setErrorFor(adres, 'username cannot be blank');
        } else {
            setSuccessFor(adres);
        }
    
        
        if(telValue === "") {
            setErrorFor(tel, 'username cannot be blank');
        } else {
            setSuccessFor(tel);
        }
    
    
    
    
    // show a success message
    }
    
    
        function setErrorFor(input, message) {
            const formControl = input.parentElement; // .form-control
            const small = formControl.querySelector('small');
        
            // add error message inside small
            small.innerText = message;
        
            // add error class
            formControl.className = 'form-control error';
        }
        
        function setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
}
