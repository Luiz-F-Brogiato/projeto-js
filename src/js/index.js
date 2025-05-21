const nomesCadastrados = ["Luiz", "Jose", "Ana", "Pedro", "Maria"];
        
        function check() {
            const nome = document.getElementById('name').value;
            let age = document.getElementById('age').value;
            let passwrd = document.getElementById('pas').value;
            const val = document.getElementById('val');
            let third = document.getElementById('third');

            if (nome === "" || passwrd === "") {
                val.innerHTML = "Campos inválidos!";
            } else {
                val.innerHTML = "Campos válidos";
            }

            if (age >= 18 || age === "") {
                third.innerHTML = "Você é maior de 18!";
            } else {
                third.innerHTML = "Você é menor de 18!";
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
        }