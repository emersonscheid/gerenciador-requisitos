
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "admin@gerenciador.com" && senha === "123456") {
        window.location.href = "pages/menu-principal.html";
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});

