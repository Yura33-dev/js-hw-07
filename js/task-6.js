function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const generateBtn = document.querySelector("[data-create]");
const deleteBtn = document.querySelector("[data-destroy");
const input = document.querySelector("#controls > input");

const parent = document.querySelector("#boxes");

generateBtn.addEventListener("click", () => {
  const inputValue = +document.querySelector("#controls > input").value;

  if (inputValue < 1 || inputValue > 100) return false;

  createBoxes(inputValue);
});

deleteBtn.addEventListener("click", () => {
  destroyBoxes();
  input.value = "";
});

const createBoxes = (amount) => {
  destroyBoxes();

  let dynamicDimensions = 30;

  const boxesArray = [];

  for (let i = 1; i <= amount; i++) {
    const box = `
      <div style="
        width: ${dynamicDimensions}px;
        height: ${dynamicDimensions}px;
        background-color: ${getRandomHexColor()}">
      </div>
    `;
    boxesArray.push(box);

    dynamicDimensions += 10;
  }
  parent.innerHTML = boxesArray.join("");
  input.value = "";
};

const destroyBoxes = () => (parent.innerHTML = "");
