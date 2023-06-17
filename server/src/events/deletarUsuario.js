import { excluiUsuario } from '../db/usuarioDb.js'

const deletarUsuario = (socket, io) => {
    socket.on('deleta_usuario',(id)=>{
        excluiUsuario(id)
        console.log(`Usuario id: ${id} deletado!`)
        socket.emit('usuario_deleta_success')
    })
}

export default deletarUsuario