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

const firstNameValid = () => {
  const messageErreurPrenom = document.getElementById("messageErreurPrenom");
  let prenom = document.getElementById("first");
  if(prenom.value.length < 2) {
    console.log("error");
    messageErreurPrenom.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    ;
    return false;
  }
  else {
    messageErreurPrenom.textContent = "";
    return true;
  }
};

const lastNameValid = () => {
  const messageErreurNom = document.getElementById("messageErreurNom");
  let nom = document.getElementById("last");

  if(nom.value.length < 2) {
    console.log("error");
    messageErreurNom.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    ;
    return false;
  }
  else {
    messageErreurNom.textContent = "";
    return true;
  }
};

const emailAdressValid = () => {
  const messageErreurMail = document.getElementById("messageErreurMail");
  let email = document.getElementById("email");
  const emailregex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if(emailregex.test(email.value)) {
    messageErreurMail.textContent = "";
    return true;

  }
  else {
    messageErreurMail.textContent = "L'adresse e-mail est incorrecte.";
    return false;
  }
}

const concoursNumber = () => {
  const messageErreurConcours = document.getElementById("messageErreurConcours");
  let quantity = document.getElementById("quantity");
  const concoursregex = /[0-9]/;

  if(concoursregex.test(quantity.value)) {
    messageErreurMail.textContent = "";
    return true;
  }
  else {
    messageErreurConcours.textContent = "La valeur saisie n'est pas un nombre";
    return false;
  }
}

const checkboxChecked = () => {
  const messageErreurCheckBox = document.getElementById("messageErreurCheckbox");

  do {
    let box = document.getElementById("location1");

    if(box.checked == true) {
      console.log("ok");
      return true;
    }
    else if(document.getElementById("location2").checked == true) {
      console.log("ok");
      return true;  
    }
    else if(document.getElementById("location3").checked == true) {
      console.log("ok");
      return true;  
    }
    else if(document.getElementById("location4").checked == true) {
      console.log("ok");
      return true;  
    }
    else if(document.getElementById("location5").checked == true) {
      console.log("ok");
      return true;  
    }
    else if(document.getElementById("location6").checked == true) {
      console.log("ok");
      return true;  
    }
    else {
      console.log("pas ok");  
      messageErreurCheckBox.textContent = "Il faut cocher une case";
      return false; 
    }
  }
  while(box.checked != true)
}

document.getElementById("formulaire").addEventListener("submit", (test) => {
  test.preventDefault();
  firstNameValid();
  lastNameValid();
  emailAdressValid();
  checkboxChecked();
  concoursNumber();
  console.log(test);
});

init();

