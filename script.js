function validacao() {



    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    if (nome.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres");
    }

    if (!email.includes("@")) {
        alert("Email deve ter @");
    }

    if (telefone.length < 8) {
        alert("Telefone deve ter no mínimo 8 dígitos");
    }
}