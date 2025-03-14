var nome = document.getElementById("nome");
var profissao = document.getElementById("profissao");
var botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    if (nome.value == "") {
        alert("Informe o nome!");
        return;
    } else if (nome.value.length < 3) {
        alert("Informe o nome completo!");
        return;
    }

    if (profissao.value == "") {
        alert("Informe a profissão!");
        return;
    } else if (profissao.value.length == "") {
        alert("Informe a profissão!");
        return;
    }

    var usuario = new Usuario;

    var cadastrar = usuario.cadastrar({
        nome: nome.value,
        profissao: profissao.value
    });

    if (cadastrar.erro) {
        alert(cadastrar.msg);
        return;
    } else {
        alert(cadastrar.msg);
        // atualizar lista
    }
});
