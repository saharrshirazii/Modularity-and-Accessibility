const form = document.getElementById('newsletterForm');
const nameInput = document.getElementById('name');
const nameErrorDiv = document.getElementById('nameError');
const emailInput = document.getElementById('email');
const emailErrorDiv = document.getElementById('emailError');
const feedbackDiv = document.getElementById('feedback');


// Add an event listener to the form's submit event
form.addEventListener('submit', function(event){
    // Prevent the default form submission (which would reload the page)
    event.preventDefault();
    // Reset previous feedback/errors
    feedbackDiv.style.display = 'none';
    nameErrorDiv.textContent = '';
    emailErrorDiv.textContent = '';

    // --- Validation Logic ---
    let isValid = true;
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();


    if (nameValue === ''){
        nameErrorDiv.textContent = 'Name can not be empty.';
        isValid = false;
    }
    if(emailValue === ''){
        emailErrorDiv.textContent = 'Email address can not be empty.';
        isValid = false;
    }
    // Optional: A simple email format check (optional but good practice)
    else if(!emailValue.includes('@') || !emailValue.includes('.') ){
        emailErrorDiv.textContent ='Please enter a valid email address.';   
        isValid = false;
    }
    // --- Feedback Logic ---
    if(isValid){
        feedbackDiv.style.display = 'block';
        // Optional: Clear the form fields after successful registration
        nameInput.value = '';
        emailInput.value = '';
    }


})


