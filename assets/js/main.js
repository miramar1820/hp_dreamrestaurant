const modalOverlay = document.querySelector(".modal-overlay"),
  modalClose = document.querySelector(".modal-close"),
  modalSignUp = document.querySelector(".modal-signup"),
  signUpBtn = document.querySelector(".nav__signup"),
  body = document.body;

if (signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    modalSignUp.classList.add("active");
    body.classList.add("no-scroll");
  });
}
if (modalClose) {
  modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modalSignUp.classList.remove("active");
    body.classList.remove("no-scroll");
  });
}
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    e.stopPropagation();
    if (modalOverlay.classList.contains("active")) {
      modalOverlay.classList.remove("active");
      modalSignUp.classList.remove("active");
      body.classList.remove("no-scroll");
    }
  });
}

const mobileToggle = document.querySelector(".nav__mobile-btn");
const mobileMenu = document.querySelector(".nav__list");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
}

const removeActive = () => {
  mobileMenu.classList.remove("active");
  mobileToggle.classList.remove("active");
};

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) => {
  link.addEventListener("click", removeActive);
});
