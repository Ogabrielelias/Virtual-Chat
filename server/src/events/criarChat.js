import {
  cadastrarChat,
  encontrarChatById,
  encontrarUsuario,
} from "../db/dbFunctions.js";

const criarChat = async (socket, io) => {
  socket.on("criar_chat", ({id, nome, email}) => {
    const usuario = encontrarUsuario(email);

    const findChat = encontrarChatById(id);
    if(id.length<1 && nome.length<1){
      socket.emit('error', 'Há campos vazios!')
    }else{
    if (findChat.length === 0) {
      const newChat = cadastrarChat(id, nome, usuario);

      if (newChat !== undefined) {
        socket.emit('chat_criado')
      }else{
        socket.emit('error', 'Erro ao cadastrar sala!')
      }
    }else{
        socket.emit('error', 'A chave da sala ja está em uso!')
    }
  }
  });
};

export default criarChat;
