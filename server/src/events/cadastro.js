import { cadastrarUsuario, encontrarUsuario, encontrarUsuarioTelefone } from "../db/dbFunctions.js";
import criaHashSenha from "../utils/criaHashSenha.js";

const cadastro = (socket, io) => {
  socket.on("cadastrar_usuario", (dados) => {
    
    if (dados.senha.length == 0 || dados.email.length == 0 || dados.telefone.length !== 11) {

        socket.emit("error", "Dados Invalidos!");

    } else {
        const {hashSenha, salSenha} = criaHashSenha(dados.senha);
  
        let novosDados = dados;
        novosDados.senha = hashSenha;
        novosDados = {...novosDados, salSenha: salSenha};
  
        const findUser = encontrarUsuario(novosDados.email);
        const findUserTelefone =encontrarUsuarioTelefone(novosDados.telefone)
        
        if (findUser === undefined && findUserTelefone === undefined) {
          
          const res = cadastrarUsuario(novosDados);
  
          if (res) {
            socket.emit("cadastro_sucesso");
            socket.emit("success", 'Cadastrado com sucesso!');
          } else {
            socket.emit("error", "Erro ao fazer seu cadastro!");
          }
        } else {
          socket.emit("error", "E-mail e/ou Telefone já está em uso!");
        }
    }
  });
};

export default cadastro;
