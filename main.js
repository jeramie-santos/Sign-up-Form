let password = document.querySelector("#password");
let cPassword = document.querySelector("#cpassword");
let incorrect = document.querySelector(".incorrect");
let btnCreate = document.querySelector(".btn-create");


btnCreate.addEventListener("click", (event) => {
    event.preventDefault();

    if (password.value !== cPassword.value) {
        incorrect.style.display = "block";
        password.classList.add("invalid");
        cPassword.classList.add("invalid");
    } else {
        incorrect.style.display = "none";
        password.classList.remove("invalid");
        cPassword.classList.remove("invalid");
    }
} )