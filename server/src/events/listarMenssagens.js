import { encontrarChatById, encontrarMenssagensChat } from "../db/dbFunctions.js"

const listarMenssagens = (socket,io) => {
    socket.on('listar_menssagens',(chat)=>{
        const chatDb = encontrarChatById(chat.id)
        const menssagens = encontrarMenssagensChat(chatDb)
        socket.emit('menssagens_chat', menssagens)
    })

}

export default listarMenssagens