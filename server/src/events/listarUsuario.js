import jwt from 'jsonwebtoken'
import { encontrarUsuario } from '../db/dbFunctions.js'

const listarUsuario = async(socket, io) => {
  socket.on('listar_perfil',(tknJwt)=>{
    
    if(tknJwt){
    const payload = jwt.verify(tknJwt,process.env.SECRET_JWT)
    
    const usuarios = encontrarUsuario(payload.email)

    if(usuarios){
    const usuarioFront = {nome:usuarios.nome, email:usuarios.email, telefone:usuarios.telefone, id:usuarios.id}
    
    socket.emit('perfil',usuarioFront)
    }
  }
  })
}

export default listarUsuario