import { scryptSync, timingSafeEqual } from 'crypto'

const autenticarUsuario = (senha, usuario) => {
    const hashTest = scryptSync(senha, usuario.salSenha,64)

    const hashReal = Buffer.from(usuario.senha, 'hex')

    const autenticado = timingSafeEqual(hashTest, hashReal)

    return autenticado
}

export default autenticarUsuario