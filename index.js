// https://www.frontendmentor.io/solutions/fylo-landing-page-two-column-hover-state-and-email-validation-b41BpwOgV3

const formTop = document.querySelector(".form-top");
const formBottom = document.querySelector(".form-bottom");

/* TO PREVENT PAGE REFRESH */
formTop.addEventListener("submit", (e) => {
  e.preventDefault();
});

formBottom.addEventListener("submit", (e) => {
  e.preventDefault();
});

let checkEmail = "Please check your email";

const topEmail = document.querySelector(".top-email-input")
