import { randomBytes, scryptSync } from 'crypto'


const criaHashSenha = (senha) => {

    const salSenha = randomBytes(16).toString('hex')

    const hashSenha = scryptSync(senha, salSenha, 64).toString('hex')

    return {hashSenha, salSenha}
}

export default criaHashSenha
