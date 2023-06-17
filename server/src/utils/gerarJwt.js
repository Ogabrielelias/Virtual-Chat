import jwt from 'jsonwebtoken'


const gerarJwt = (usuario) => {

    const token = jwt.sign({
                                email:usuario.email,
                            },
                                process.env.SECRET_JWT, {expiresIn:"1d"}
                            )
    return token

}

export default gerarJwt