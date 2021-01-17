const toggleButton = document.querySelector("#toggleBtn");
const priceBasic = document.querySelector(".basic .pricing__plan-price-amount");
const priceProfessional = document.querySelector(
  ".professional .pricing__plan-price-amount"
);
const priceMaster = document.querySelector(
  ".master .pricing__plan-price-amount"
);

toggleButton.addEventListener("click", () => {
  if (toggleButton.classList.contains("monthly")) {
    toggleButton.classList.add("annualy");
    toggleButton.classList.remove("monthly");
    showAnnuallyPrices();
  } else {
    toggleButton.classList.remove("annualy");
    toggleButton.classList.add("monthly");
    showMonthlyPrices();
  }
});

function showMonthlyPrices() {
  priceBasic.textContent = "19.99";
  priceProfessional.textContent = "24.99";
  priceMaster.textContent = "39.99";
}

function showAnnuallyPrices() {
  priceBasic.textContent = "199.99";
  priceProfessional.textContent = "249.99";
  priceMaster.textContent = "399.99";
}
