let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let showIncorrect = document.querySelector(".incorrect");
let btnCreate = document.querySelector(".btn-create");


btnCreate.addEventListener("click", (event) => {
    event.preventDefault();

    if (password.value !== confirmPassword.value) {
        showIncorrect.style.display = "block";
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    } else {
        showIncorrect.style.display = "none";
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    }
} )