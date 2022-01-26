const mail = document.getElementById('mail');
const errorMsg = document.querySelector('.email_error_msg');
const formButton = document.querySelector('.getintouch');
const form = document.getElementsByTagName('form');

function isEmailLowerCase (email){
    let lowerCasedEmail = email.toLowerCase();
    return email !== lowerCasedEmail;  
}

formButton.addEventListener('click', (e) =>{
   e.preventDefault();
   console.log(isEmailLowerCase(mail.value));
   if(isEmailLowerCase(mail.value)){
    errorMsg.classList.add('show_email_error_msg');
   }else {errorMsg.classList.remove('show_email_error_msg');}
});