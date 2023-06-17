import { socket } from "../socket"

const listarChat = ( chat) => {
    socket.emit('listar_menssagens', chat)

}

export default listarChat