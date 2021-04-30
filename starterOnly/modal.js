const init = () => {
  const modalBtn = document.querySelectorAll(".modal-btn");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  const icon = document.getElementById("icon");
  icon.addEventListener('click', () => {
    editNav();
  })
};

const editNav = () => {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
};

init();
