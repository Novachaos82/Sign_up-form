const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phnNumber = document.getElementById("numbers");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  check();
});

function check() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phnNumberValue = phnNumber.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (firstNameValue === "") {
    checkForError(firstName, "First Name cannot be blank");
  } else {
    checkForSuccess(firstName);
  }

  if (lastNameValue === "") {
    checkForError(lastName, "Last Name cannot be blank");
  } else {
    checkForSuccess(lastName);
  }

  if (emailValue === "") {
    checkForError(email, "Email cannot be blank");
  } else {
    checkForSuccess(email);
  }

  if (phnNumberValue === "") {
    checkForError(phnNumber, "Phone Number cannot be blank");
  } else {
    checkForSuccess(phnNumber);
  }

  if (passwordValue === "") {
    checkForError(password, "password cannot be blank");
  } else {
    checkForSuccess(password);
  }

  if (confirmPasswordValue === "") {
    checkForError(confirmPassword, "Confirm password cannot be blank");
  } else if (passwordValue !== confirmPasswordValue) {
    checkForError(confirmPassword, "Passwords do not match");
  } else {
    checkForSuccess(confirmPassword);
  }
}

function checkForError(input, message) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");

  small.innerText = message;

  inputControl.className = "input-control error";
}

function checkForSuccess(input) {
  const inputControl = input.parentElement;

  inputControl.className = "input-control success";
}
