import api from "./api";


const TOKEN = "MinhaSenhaSegura123456";

export type LoginPayload = {
    username: string, 
    password: string
}

export async function doLogin(loginPayload: LoginPayload) {
    if(!loginPayload.username || !loginPayload.password) {
        return {sucess: false, message: "User ou password inválidos :("}
    }

    const {data} = await api.post("/login", loginPayload)

    if (!data.token) {
        return {sucess: false, message: "Login inválido :("}
    }
    const token = data.token
    localStorage.setItem(TOKEN, token )
    return {sucess: true, token: token }
    
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

export function doLogoff(){
    localStorage.removeItem(TOKEN)
}