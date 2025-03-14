class Usuario {
    cadastrar({ nome = null, profissao = null }) {
        try {
            if (!nome || !profissao) {
                return { erro: true, msg: "Informe os dados completos!" };
            }

            let usuarios = localStorage.getItem("usuarios") || "[]";

            usuarios = JSON.parse(usuarios);

            usuarios.push({
                id: usuarios.length + 1,
                nome,
                profissao
            });

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            return { erro: false, msg: "Usuário adicionado com sucesso!" };
        } catch (error) {
            return { erro: true, msg: error.message };
        }
    }
}