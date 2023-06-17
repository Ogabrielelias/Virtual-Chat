import { socket } from "../socket"

const enviarMsg = (menssagem) => {
    socket.emit('enviar_menssagem',(menssagem))
    
}

export default enviarMsg