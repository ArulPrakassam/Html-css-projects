const nameInput = document.getElementById("name");
const tel = document.getElementById("tel");
const userName = document.getElementById("username");
const agree = document.getElementById("agree");
const submit = document.getElementById("submit");
nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("Enter your name!");
  }
});
tel.addEventListener("input", () => {
  tel.setCustomValidity("");
  tel.checkValidity();
});
tel.addEventListener("invalid", () => {
  if (tel.value === "") {
    tel.setCustomValidity("Enter your phone number!");
  }
});
userName.addEventListener("input", () => {
  userName.setCustomValidity("");
  userName.checkValidity();
});
userName.addEventListener("invalid", () => {
  if (userName.value === "") {
    userName.setCustomValidity("Enter your username!");
  }
});

agree.addEventListener("change", (e) => {
  submit.disabled = !e.target.checked;
});
