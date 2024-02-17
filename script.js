const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");
const hackedBtn = document.querySelector(".sign-up-btn")
const formWrapper = document.querySelector(".form-wrapper")

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

// hackedBtn.addEventListener('click', () => {
//   formWrapper.classList.toggle("hacked");
//   container.classList.remove("change");
//   // container.classList.toggle("animation");
//   container.classList.add("animation")
// })



