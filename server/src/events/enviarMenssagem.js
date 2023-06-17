import { cadastrarMenssagem } from "../db/dbFunctions.js"

const enviarMenssagem = (socket,io) => {
    socket.on('enviar_menssagem',(menssagem)=>{
        cadastrarMenssagem(menssagem)
        socket.to(`chat:${menssagem.chat.id}`).emit('message', menssagem.texto)
        socket.to(`chat:${menssagem.chat.id}`).emit('novas_menssagens')
    })
}

export default enviarMenssagem