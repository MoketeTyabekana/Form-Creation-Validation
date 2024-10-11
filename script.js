
//Wrapping the entire scrip in a DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
   
    const form =document.getElementById('registration-form');
    const feedbackDiv=document.getElementById('form-feedback');

    form.addEventListener('submit',function(event){

        event.preventDefault();

        const name=document.getElementById('username').value.trim();
        const mail=document.getElementById('email').value.trim();
        const password=document.getElementById('password').value.trim();


        let isValid=true;

        let messages=[];

    });
});