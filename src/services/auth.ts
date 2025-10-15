

const TOKEN = "MinhaSenhaSegura123456";

export type LoginPayload = {
    username: string, 
    password: string
}

export async function doLogin(loginPayload: LoginPayload) {
    if(!loginPayload.username || !loginPayload.password) {
        return {sucess: false, message: "User ou password inválidos :("}
    }

    if(loginPayload.username === "teste" && loginPayload.password === "teste") {
        const token = "imagineTokenJwtAqui"
        localStorage.setItem(TOKEN, token )
        return {sucess: true, token: token }
    }

    return {sucess: false, message: "Erro no login"}
}

export function getToken() {
    return localStorage.getItem(TOKEN)
}

export  function verifyToken(token: string): boolean{
    const parts = token.split(".")
    if(parts.length != 3) {
        return false
    }
    return true
}