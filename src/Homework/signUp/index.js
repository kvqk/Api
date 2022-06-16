const container = document.getElementById("background-color");

const loginForm = document.createElement("div");
loginForm.id = "login-form";
container.append(loginForm);

const loginText = document.createElement("div");
const login = document.createElement("p");
loginText.id = "loginText";
loginText.textContent = "Sign Up";

loginForm.append(loginText);

const center = document.createElement("div");
center.id = "center";

loginForm.append(center);

const redBorder = document.createElement("div");
redBorder.id = "redBorder";
center.append(redBorder);
const userInput = document.createElement("input");
userInput.id = "username";
userInput.classList.add("onlyUsername");
userInput.placeholder = "Username";

redBorder.append(userInput);

const password = document.createElement("input");
password.id = "password";
password.placeholder = "Password";
password.type = "password";
redBorder.append(password);

const email = document.createElement("input");
email.id = "username";
email.classList.add("onlyUsername");
email.placeholder = "Email";
email.type = "email";

redBorder.append(email);

const button = document.createElement("button");
button.id = "button";
button.textContent = "Login";
redBorder.append(button);

const haveAccount = document.createElement("p");
haveAccount.classList.add("haveAccount");
haveAccount.textContent = "Already Have An Account?";
redBorder.append(haveAccount);


redBorder.append(login);

const href = document.createElement("a");
href.href = "../logIn/index.html";
redBorder.append(href);
const span = document.createElement("span");
span.classList.add("haveAccount");
span.id = "login";
span.textContent = "Login";
href.append(span);
