
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

        if(name.length<3){
            isValid=false;
            messages.push("The length of the username should be 3 charectors at least.");
        }
     

        if(!mail.includes('@')||!mail.includes('.')){
           isValid=false;
           messages.push("The email should contain @ symbol.");
        }
        else{
            
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("The password should at least be 8 characters long.");
        }

       
        feedbackDiv.style.display = "block"; 
        feedbackDiv.innerHTML = '';

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; 
        }

        

    });

   
});