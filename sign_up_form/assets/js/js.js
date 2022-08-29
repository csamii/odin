const phoneNo = document.querySelector('#phoneNo');
const password = document.querySelector('.password');
const conPassword = document.querySelector('.conPassword');
const error = document.querySelector(".error");
const form = document.getElementById("my-form");

phoneNo.addEventListener('input', () => {
    phoneNo.setCustomValidity('');
    phoneNo.checkValidity();
});

phoneNo.addEventListener('invalid', () => {
    if(phoneNo.value === '') {
      phoneNo.setCustomValidity('Enter phone number!');
    } else {
      phoneNo.setCustomValidity('Enter phone number in this format: 080-458673790');
    }
});

form.addEventListener("submit", (e) => {    
    

    if (password.value !== conPassword.value) {
        e.preventDefault();
        error.style.display = "block";
        password.classList.add("invalid");
        conPassword.classList.add("invalid");
    }
});