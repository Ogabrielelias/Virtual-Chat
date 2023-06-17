
import jwt from 'jsonwebtoken';

const negarUsuario = (socket, next) => {

        const tokenJwt = socket.handshake.auth.token
        if (tokenJwt){
        const payload = jwt.verify(tokenJwt,process.env.SECRET_JWT)

        if(payload){
            socket.emit('inaccessible_url')
        }

        
    }
    next();
}

export default negarUsuario
