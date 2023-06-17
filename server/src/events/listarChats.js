import { encontrarChats } from '../db/dbFunctions.js'

const listarChats = async(socket, io) => {
  socket.on('listar_chats',(email)=>{
    
    if(email){
    
    const chats = encontrarChats(email)
    
    if(chats){
      
      chats.forEach(chat=>socket.join(`chat:${chat.id}`))
        const chatsFront = chats.map((chat)=>{return({id:chat.id, nome:chat.nome ,menssagens:chat.menssagens})})
        
    socket.emit('chats',chatsFront)
    } else{socket.emit('error','Erro ao listar chats!')}
  }
  })
}

export default listarChats