

   const form = document.getElementById("contactForm");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const Masseage = document.getElementById("Masseage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Phone
  if (!validatePhone(phone.value)) {
    setError(phone, "Enter a valid phone number");
    isValid = false;
  } else {
    setSuccess(phone);
  }

  // Email
  if (!validateEmail(email.value)) {
    setError(email, "Enter a valid email");
    isValid = false;
  } else {
    setSuccess(email);
  }

  // Message
  if (Masseage.value.trim().length < 10) {
    setError(Masseage, "Message must be at least 10 characters");
    isValid = false;
  } else {
    setSuccess(Masseage);
  }

  if (isValid) {
    alert("Message sent successfully 🚀");
    form.reset();
  }
});

// Functions
function setError(input, msg) {
  const error = input.nextElementSibling;
  error.innerText = msg;
  input.classList.add("error-border");
  input.classList.remove("success");
}

function setSuccess(input) {
  const error = input.nextElementSibling;
  error.innerText = "";
  input.classList.add("success");
  input.classList.remove("error-border");
}

// Email validation
function validateEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}

// Phone validation (مناسب لمصر)
function validatePhone(phone) {
  return /^01[0-2,5]{1}[0-9]{8}$/.test(phone);
}

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
