document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('Masseage');
    const phoneError = document.getElementById('p1');
    const emailError = document.getElementById('p3'); // First p3 for email
    const messageError = document.querySelectorAll('#p3')[1]; // Second p3 for message
    const generalError = document.getElementById('p');
    const submitBtn = document.getElementById('btn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous errors
        phoneError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        generalError.textContent = '';

        let isValid = true;

        // Simple validation: check if not empty
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Phone number is required.';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            // Form is valid, show success
            generalError.textContent = 'Form submitted successfully!';
            generalError.style.color = 'green';
        }

        // Always scroll to bottom of the full website
        window.scrollTo(0, document.body.scrollHeight);
    });
});

let btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};


btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
