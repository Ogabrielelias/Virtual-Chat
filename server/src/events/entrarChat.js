import { encontrarUsuario, participarChat } from "../db/dbFunctions.js"

const entrarChat = (socket,io) => {
  socket.on('entrar_chat',({id, email})=>{
    const usuario = encontrarUsuario(email)
    const entrouChat = participarChat(id,usuario)
    
    if(entrouChat){
      socket.emit('success','Entrou no chat com sucesso!')
    }else{
      socket.emit('error','Erro ao entrar no chat!')
    }

  })
}

export default entrarChat