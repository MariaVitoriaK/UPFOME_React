import NavBar from "@/components/NavBar"
import api from "@/services/api"
import { error } from "console"
import { useEffect, useRef, useState } from "react"
import { Button } from "react-bootstrap"

export default function Cachorros() {
    const [nomeCachorro, setNomeCachorro] = useState('')
    const [update, setUpdate] = useState(false)
    const [fotoCachorro, setFotoCachorro] = useState('')
    const firstRun = useRef(true)

    const [racaCachorro, setRacaCachorro] = useState('')

    useEffect(() => {
        if (!firstRun.current) {
            api.get('/breeds/image/random').then((response) => {
                if (response.status == 200) {
                    const data = response.data
                    setFotoCachorro(data.message) 
                }
            }, (error) => {
                console.log(error)
            })
        } else {
            firstRun.current = false
        }
        setNomeCachorro('Pato')
        console.log(firstRun)
    }, [update])

    return (
        <>
        <NavBar pagina='dogs'/>
        { 
            nomeCachorro != '' ? 
            <h1>{nomeCachorro}</h1> :
            <h1>Procurando cachorro</h1>
        }
        <br />
        {
            fotoCachorro != '' ?
            <img src={fotoCachorro} alt="Foto de um cachorro" /> :
            <h2>Procurando foto...</h2>
        }
        <br />
        <form>
            <label>
                Escola a raça do cachorro:
                <input 
                type="text"
                value={}
                onChange={}
                />
            </label>
        </form>
        <br />
        <Button type="submit" variant="warning" onClick={() => setUpdate(!update)}>Atualizar 🐶</Button>
        </>
    )
}