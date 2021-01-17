const toggleButton = document.querySelector("#toggleBtn");
const amountEl = document.querySelectorAll(".amount");
let isMonthly = true;

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("annualy");
  togglePrices();
  isMonthly = !isMonthly;
});

const togglePrices = () => {
  isMonthly
    ? amountEl.forEach((el) => (el.innerHTML = `${el.dataset.annually}`))
    : amountEl.forEach((el) => (el.innerHTML = `${el.dataset.monthly}`));
};
