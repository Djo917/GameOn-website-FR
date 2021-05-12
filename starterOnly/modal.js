const init = () => {
  const modalBtn = document.querySelectorAll(".modal-btn");
  const closed = document.getElementById('close');
  const icon = document.getElementById("icon");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  closed.addEventListener('click', () => {
    closeForm();
  })

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

// launch modal form
const launchModal = () => {
  const modalBg = document.querySelector(".bground");
  modalbg.style.display = "block";
};

const closeForm = () => {
  const modalBg = document.querySelector(".bground");
  modalBg.style.display = "none";
}

init();

