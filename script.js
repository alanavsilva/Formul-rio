function validacao() {

    let valido = true;

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let horas_sozinho = document.getElementById("horas_sozinho").value;
    let motivo = document.getElementById("motivo").value;
    let tipo = document.querySelector('input[name="tipo"]:checked');
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let antes = document.querySelector('input[name="antes"]:checked');
    let financeiro = document.querySelector('input[name="financeiro"]:checked');
    let cpf = document.getElementById("cpf").value;
    let cpf_duplicado = [
        "12345678910",
        "10987654321",
        "11223344556",
        "67788991010"
    ]
    let resultado = document.getElementById("resultado");


    if (nome.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres.");
        valido = false;
    }

    if (!email.includes("@")) {
        alert("Email deve ter @.");
        valido = false;
    }

    if (telefone.length < 8) {
        alert("Telefone deve ter no mínimo 8 dígitos.");
        valido = false;
    }

    if (idade < 18) {
        alert("Envio bloqueado! Você deve ser maior de idade para adotar.");
        valido = false;
    }

    if (isNaN(horas_sozinho)) {
        alert("As horas por dia sozinhas do seu animal devem ser informadas apenas com números.");
        valido = false;
    }

    if (horas_sozinho >= 8) {
        let porque = prompt("Atenção!! Não é recomendado deixar seu animalzinho tanto tempo sozinho, justifique o porquê de tanto tempo:");
        valido = false;
    }

    if (motivo.length < 10) {
        alert("O motivo de adoção deve ter no mínimo 10 caracteres.");
        valido = false;
    }

    if ((motivo === "porque sim") || (motivo === "porque quero") || (motivo === "porque eu quero") || (motivo === "Porque sim") || (motivo === "Porque quero") || (motivo === "Porque eu quero")) {
        alert("Resposta do motivo de adoção muito genérica, não será aceita.")
        valido = false;
    }

    if ((tipo && tipo.value === "casa") && (quintal && quintal.value === "sim")) {
        let resposta1 = prompt("O quintal é seguro?");
        valido = false;
    }

    if (tipo && tipo.value === "apartamento") {
        let resposta2 = prompt("O apartamento permite animais?");
        valido = false;
    }

    if (antes && antes.value === "nao") {
        alert("Já que você não teve nenhum animalzinho antes, pode haver um acompanhamento da ONG.");
        valido = false;
    }

    if (cpf_duplicado.includes(cpf)) {
        alert("Esse CPF já está cadastrado");
        valido = false;
    }

    if (tipo && tipo.value === "apartamento" && quintal && quintal.value === "sim") {
        alert("Ocorreu um erro, quem mora em apartamento não pode ter quintal.");
        valido = false;
    }

    if (tipo && tipo.value === "casa" && quintal && quintal.value === "nao") {
        alert("Aviso: por não possuir quintal, o uso de espaço externo pode ser limitado.");
        valido = false;
    }

    if (financeiro && financeiro.value === "nao") {
        alert("Você marcou que não tem financeiro para cuidar de um animalzinho, opte por um momento que tenha condições essa responsabilidade");
        valido = false;
    }
    if (!valido) {
        return;
    }

    if (valido) {
        alert("Nome: " + nome + "/n" +
            "Email: " + email + "/n" +
            "Telefone: " + telefone + "/n" +
            "CPF" + cpf + "/n" +
            "Idade: " + idade + "/n" +
            "Cidade" + cidade + "/n" +
            "Mora em: " + tipo.value + " / n" +
            "Apresentou " + quintal.value + " ter quintal em casa/n" +
            "Apresentou " + antes.value + " já ter tido um animal/n" +
            "Apresentou " + financeiro.value + " ter condições financeiras de ter um animal/n" +
            "Animal ficará sozinho: " + horas_sozinha + " horas/n" +
            "Motivo da adoção: " + cidade + " /n");

    }
}
