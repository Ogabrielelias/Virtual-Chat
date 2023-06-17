import { encontrarUsuario } from "../db/dbFunctions.js"
import autenticarUsuario from "../utils/autenticarUsuario.js"
import gerarJwt from "../utils/gerarJwt.js"

const login = (socket, io) => {
    socket.on('logar_usuario', ({email, senha})=>{
        const usuario =  encontrarUsuario(email)

        if(usuario){

            const auth = autenticarUsuario(senha, usuario)

            if (auth){
                const tknJwt = gerarJwt(usuario)
                
                const perfil = {nome:usuario.nome, telefone:usuario.telefone, email:usuario.email,id:usuario.id}
                socket.emit('perfil',perfil)
                
                socket.emit('auth_success', tknJwt)
                socket.emit("success", 'Logado com sucesso!');
            }else{
                socket.emit('error', 'Erro de autenticação!')
            }
        } else{
            socket.emit('error', 'Usuario não encontrado!')
        }
    })
}

export default login