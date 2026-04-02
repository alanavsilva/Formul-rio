function validacao() {

    //captações

    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;




    // validações



    if (nome.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres");
    }



}