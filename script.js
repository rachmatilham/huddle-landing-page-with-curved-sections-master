const submitButton = document.querySelector('button[type="submit"]');
const newsletterInput = document.querySelector(".newsletter-input");

submitButton.addEventListener("click", (event) => {
  let result = newsletterInput.checkValidity();
  if (result === false || newsletterInput.value === "") {
    event.preventDefault();
    newsletterInput.classList.add("active");
    document.querySelector(".error").classList.add("active");
    newsletterInput.style.outline = "none";
  } else if (result) {
    event.preventDefault();
    newsletterInput.classList.remove("active");
    document.querySelector(".error").classList.remove("active");
  }
});
newsletterInput.addEventListener("focus", (event) => {
  event.preventDefault();
  newsletterInput.classList.remove("active");
  document.querySelector(".error").classList.remove("active");
});
