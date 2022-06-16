const container = document.getElementById("background-color");

const loginForm = document.createElement("div");
loginForm.id = "loginForm";

container.append(loginForm);

const loginText = document.createElement("div");
const login = document.createElement("p");
loginText.id = "loginText";
loginText.textContent = "Login";

loginText.append(login);
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

const forgotPassword = document.createElement("p");
forgotPassword.id = "forgotPassTxt";
forgotPassword.textContent = "Forgot Password?";
redBorder.append(forgotPassword);

const button = document.createElement("button");
button.id = "button";
button.textContent = "Login";
redBorder.append(button);

const memberSignUp = document.createElement("div");
memberSignUp.id = "memberSignUp";
redBorder.append(memberSignUp);

const memberTxt = document.createElement("p");
memberTxt.classList.add("memberTxt");
memberTxt.textContent = "Not A Member?";
memberSignUp.append(memberTxt);

const href = document.createElement("a");
href.href = "../signUp/index.html";
memberSignUp.append(href);

const span = document.createElement("span");
span.classList.add("memberTxt");
span.id = "signUp";
span.textContent = "Sign Up";
href.append(span);
