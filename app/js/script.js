const toggleButton = document.querySelector("#toggleBtn");

toggleButton.addEventListener("click", () => {
  if (toggleButton.classList.contains("monthly")) {
    toggleButton.classList.add("annualy");
    toggleButton.classList.remove("monthly");
  } else {
    toggleButton.classList.remove("annualy");
    toggleButton.classList.add("monthly");
  }
});
