import { socket } from '../socket.js'

const deleteUsuario = (id) =>{
    socket.emit('deleta_usuario', id)
    socket.on('usuario_deleta_success', ()=>window.alert('Deletada com sucesso!'))
}

export default deleteUsuario