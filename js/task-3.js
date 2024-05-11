"use strict";

const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  value.length ? (span.textContent = value) : (span.textContent = "Anonymous");
});
