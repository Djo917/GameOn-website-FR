const init = () => {
  const modalBtn = document.querySelectorAll(".modal-btn");
  const closed = document.getElementById('close');
  const icon = document.getElementById("icon");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

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
  modalBg.style.display = "block";
};


const closeForm = () => {
  const modalBg = document.querySelector(".bground");
  modalBg.style.display = "none";
}


let messageErreurPrenom = document.getElementById("messageErreurPrenom");
let messageErreurNom = document.getElementById("messageErreurNom");


const firstNameValid = () => {
  let prenom = document.getElementById("first");
  if(prenom.value.length < 2) {
    console.log("error");
    messageErreurPrenom.textContent = "Le champ prénom doit contenir au minimum 2 caractères";
    return false;
  }
  else {
    messageErreurPrenom.textContent = "";
    return true;
  }
};

const lastNameValid = () => {
  let nom = document.getElementById("last");
  if(nom.value.length < 2) {
    console.log("error");
    messageErreurNom.textContent = "Le champ nom doit contenir au minimum 2 caractères";
    return false;
  }
  else {
    messageErreurNom.textContent = "";
    return true;
  }
};

document.getElementById("formulaire").addEventListener("submit", (test) => {
  test.preventDefault();
  firstNameValid();
  lastNameValid();
  console.log(test);
});

init();

