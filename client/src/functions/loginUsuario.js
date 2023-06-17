import { socket } from '../socket'
import { defCookie } from '../utils/cookies.js'

socket.connect()

const loginUsuario = (dados) => {
    socket.emit('logar_usuario', dados)
    
    socket.on('auth_success', (token)=> {
        defCookie("tokenJwt", token)
        window.location.href='/conversas'
    })
}


export default loginUsuario