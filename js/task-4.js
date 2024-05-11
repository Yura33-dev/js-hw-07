"use strict";

const form = document.querySelector("form.login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = e.target.elements;

  if (email.value.trim().length && password.value.trim().length) {
    const formData = {
      [email.name]: email.value.trim(),
      [password.name]: password.value.trim(),
    };

    console.log(formData);
    e.target.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
