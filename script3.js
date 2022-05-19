const btn = document.getElementById("LoginBtn");
const titleText = document.getElementById("Title");

let isAdmin = false;
let adult = true;

const loginUser = () => {
    isAdmin === true ? titleText.textContent = "Admin" : titleText.textContent = "User";
    adult === true && console.log("Siema");
}


btn.addEventListener("click", loginUser);