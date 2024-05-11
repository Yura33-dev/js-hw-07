"use strict";

// TASK 1
const categoriesList = document.querySelectorAll("li.item");
console.log(categoriesList.length);

// TASK 2
categoriesList.forEach((category) => {
  const liHeader = category.querySelector("h2").textContent;
  const nestedLi = category.querySelectorAll("li").length;

  console.log("Number of categories:", nestedLi, "Category:", liHeader);
});
