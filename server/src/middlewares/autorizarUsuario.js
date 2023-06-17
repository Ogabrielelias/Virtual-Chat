
import jwt from 'jsonwebtoken';

const autorizarUsuario = (socket, next) => {

    const tokenJwt = socket.handshake.auth.token
    
    try{
        const payload = jwt.verify(tokenJwt,process.env.SECRET_JWT)

        if(!payload){
            next(new Error('Você não possui acesso a está página!'))
        }

        next();
    }catch(err){
        next(err)
    }

}

export default autorizarUsuario
