const nomesCadastrados = ["Luiz", "Jose", "Ana", "Pedro", "Maria"];
        
        function check() {
            const nome = document.getElementById('name').value;
            let age = document.getElementById('age').value;
            let passwrd = document.getElementById('pas').value;
            const val = document.getElementById('val');
            let third = document.getElementById('third');

                if (nome === "" || passwrd === "") {
                    val.innerHTML = "Campos inválidos!";
 
                    trocaCor('pas', 'name')

                } else {
                    val.innerHTML = "Campos válidos";
            }
             if (nome == "") {
                val.innerHTML = "Escreva um nome!";
                trocaCor('name')
            } 

            if (age >= 18) {
                third.innerHTML = "Você é maior de 18!";
            } else {
                third.innerHTML = "Você é menor de 18!";
            }
            if (age == "") {
                third.innerHTML = "Idade não cadastrada!"
                  trocaCor('age')
            }
            nomeCadastrado(nome)
        }

        function nomeCadastrado(nome) {
            let vali = document.getElementById('vali');

            if (nomesCadastrados.includes(nome)) {
                vali.innerHTML = `O ${nome} está cadastrado`;
            } else {
                vali.innerHTML = `O ${nome} não está cadastrado`;
            } 
            if (nome == ""){
                vali.innerHTML = `Não há nomes cadastrados!`;
                trocaCor()
            }
        }

  function trocaCor(...ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.backgroundColor = '#FF4C4C';
  });
}
