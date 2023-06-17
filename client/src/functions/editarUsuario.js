import { socket } from '../socket'

socket.connect()

const editarUsuario = (dados) => {
    socket.emit('editar_usuario', ({id:dados.id, dados:dados.dados}))
}


export default editarUsuario