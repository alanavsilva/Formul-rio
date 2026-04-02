function validacao() {

    //captações

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let tipo = document.getElementById("tipo").value;
    let quintal = document.getElementById("quintal").value;
    let antes = document.getElementById("antes").value;
    let horas_sozinho = document.getElementById("horas_sozinho").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").value;




    // validações



    if (nome.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres");
    }



}