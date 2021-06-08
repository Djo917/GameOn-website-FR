const init = () => {
  const modalBtn = document.querySelectorAll(".modal-btn");
  const closed = document.getElementById("close");
  const icon = document.getElementById("icon");

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  closed.addEventListener("click", () => {
    closeForm();
  });

  icon.addEventListener("click", () => {
    editNav();
  });
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
};

const firstNameValid = () => {
  const messageErreurPrenom = document.getElementById("messageErreurPrenom");
  let prenom = document.getElementById("first");

  if (prenom.value.length < 2) {
    console.log("error");
    messageErreurPrenom.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;

  } else {
    messageErreurPrenom.textContent = "";
    return true;
  }
};

const lastNameValid = () => {
  const messageErreurNom = document.getElementById("messageErreurNom");
  let nom = document.getElementById("last");

  if (nom.value.length < 2) {
    console.log("error");
    messageErreurNom.textContent ="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;

  } else {
    messageErreurNom.textContent = "";
    return true;
  }
};

const emailAdressValid = () => {
  const messageErreurMail = document.getElementById("messageErreurMail");
  let email = document.getElementById("email");
  const emailregex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (emailregex.test(email.value)) {
    messageErreurMail.textContent = "";
    return true;

  } else {
    messageErreurMail.textContent = "L'adresse e-mail est incorrecte.";
    return false;
  }
};

const concoursNumber = () => {
  const messageErreurConcours = document.getElementById("messageErreurConcours");
  const quantity = document.getElementById("quantity");
  const quantityNumber = parseInt(quantity.value, 10);

  if (Number.isInteger(quantityNumber)) {
    if (quantityNumber < 0 || quantityNumber > 99) {
      messageErreurConcours.textContent ="Le nombre doit être compris en 0 et 99";
      return false;
    }
    messageErreurConcours.textContent = "";
    return true;
  }
  messageErreurConcours.textContent = "La valeur saisie n'est pas un nombre";
  return false;
};

const checkboxChecked = () => {
  const messageErreurCheckBox = document.getElementById("messageErreurCheckbox");

  do {
    const box = document.getElementById("location1");

    if (box.checked == true) {
      console.log("ok");
      messageErreurCheckBox.textContent = "";
      return true;

    } else if (document.getElementById("location2").checked == true) {
      console.log("ok");
      messageErreurCheckBox.textContent = "";
      return true;

    } else if (document.getElementById("location3").checked == true) {
      console.log("ok");
      messageErreurCheckBox.textContent = "";
      return true;

    } else if (document.getElementById("location4").checked == true) {
      console.log("ok");
      messageErreurCheckBox.textContent = "";
      return true;

    } else if (document.getElementById("location5").checked == true) {
      console.log("ok");
      messageErreurCheckBox.textContent = "";
      return true;

    } else if (document.getElementById("location6").checked == true) {
      console.log("ok");
      messageErreurCheckBox.textContent = "";
      return true;

    } else {
      console.log("pas ok");
      messageErreurCheckBox.textContent = "Vous devez choisir une option";
      return false;
    }
  } while (box.checked != true);
};

const generalTerms = () => {
  const messageErreurGeneralTerms = document.getElementById("messageErreurGeneralTerms");

  if (document.getElementById("checkbox1").checked == true) {
    console.log("ok");
    messageErreurGeneralTerms.textContent = "";
    return true;

  } else {
    console.log("pas ok");
    messageErreurGeneralTerms.textContent ="Vous devez vérifier que vous acceptez les termes et conditions";
    return false;
  }
};

const birthDate = () => {
  const messageErreurBirthDate = document.getElementById("messageErreurBirthDate");
  const date = document.getElementById("birthdate").value.split("-"); //enlève le séparateur de la date
  const yearDays = date[0];
  
  const today =  new Date(); //Récupère la date actuelle
  const currentYear = today.getFullYear(); // Stock l'année dans currentYear
  
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  if (date[0] !== "") {
    /*Vérifie que le nombre de jour n'est pas supérieur à 30 pour les mois concernés*/
    if (date[2] < 1) {
      messageErreurBirthDate.textContent = "Le nombre du jour est incorrect";
      return false;

    } else if (date[1] < 1 || date[1] > 12) {
      messageErreurBirthDate.textContent = "Le chiffre du mois est incorrect";
      return false;

    } else if (date[0].length < 4 || date[0].length > 4) {
      messageErreurBirthDate.textContent = "L'année est incorrecte";
      return false;
    }

    /* Définit si l'année est bissextile ou non
  Dans le cas où elle l'est, le nombre de jour de février augmente de 1 */
    if (yearDays % 400 === 0 || (yearDays % 100 !== 0 && yearDays % 4 === 0)) {
      daysInMonth[1] = 29;
    }
    if (date[2] > daysInMonth[date[1]-1]) {
      messageErreurBirthDate.textContent ="Le nombre de jour est incorrect pour ce mois";
      return false;
    }

    if ((currentYear - date[0]) < 16) {
      messageErreurBirthDate.textContent ="Il faut avoir 16 ans minimum pour s'inscrire";
      return false;
    }
    else if ((currentYear - date[0]) > 99) {
      messageErreurBirthDate.textContent ="Il faut avoir moins de 99 ans pour s'inscrire";
      return false;
    }
    
    messageErreurBirthDate.textContent ="";
    return true;
    
  } else {
    messageErreurBirthDate.textContent ="Vous devez entrer votre date de naissance.";
  }
};

const confirmationSubmit = () => {
  if(firstNameValid() && lastNameValid() && emailAdressValid() && checkboxChecked() 
  && concoursNumber() && generalTerms() && birthDate()) {
    closeForm();
    alert("Le formulaire a bien été envoyé");
    document.getElementById("formulaire").reset();
  }
};

document.getElementById("formulaire").addEventListener("submit", (test) => {
  test.preventDefault();
  firstNameValid();
  lastNameValid();
  emailAdressValid();
  checkboxChecked();
  concoursNumber();
  generalTerms();
  birthDate();
  confirmationSubmit();
  console.log(test);
});

init();
