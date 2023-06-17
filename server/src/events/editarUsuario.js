import { editarUsuarioDb, encontrarUsuario, encontrarUsuarioTelefone } from "../db/dbFunctions.js";

const editarUsuario = (socket,io) => {
    socket.on('editar_usuario', ({id,dados})=>{

        const findUser = encontrarUsuario(dados.email)
        const findUserTelefone = encontrarUsuarioTelefone(dados.telefone)
        if(findUser === undefined || findUser.id===id){
        if(findUserTelefone === undefined || findUserTelefone.id===id){

            const editado = editarUsuarioDb(id,dados)
            if(editado){
                socket.emit("success", 'Editado com sucesso!');
            } else{
                socket.emit('error', 'Erro ao editar seu perfil!')
            }
        }else{
            socket.emit('error', 'Este número de telefone já está em uso!')
        }
    }else{
        socket.emit('error', 'Este e-mail já está em uso!')
    }
    })
}

export default editarUsuario