import { socket } from '../socket'

socket.connect()

const cadastroUsuario = (dados) => {
    socket.emit('cadastrar_usuario', dados)
    
    socket.on('cadastro_sucesso', ()=> {window.location.href='/'})
}


export default cadastroUsuario