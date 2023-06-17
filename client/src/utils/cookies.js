
const defCookie = (chave, valor) => {
    document.cookie = `${chave}=${valor};path=/`
}

const obterCookie = (chave) => {

    return document.cookie
    .split('; ')
    .find((cookie)=>cookie.startsWith(`${chave}=`))
    ?.split('=')[1]

}

const removeCookie = (chave) =>{
    document.cookie = `${chave}=; expires=Thu, 01 Jan 1970 00:00:00`
}

export { defCookie, obterCookie, removeCookie }

