import NavBar from "@/components/NavBar"
import api from "@/services/api"
import { useEffect, useRef, useState } from "react"
import { Button, Card, Form } from "react-bootstrap"

export default function Cachorros() {
    const [nomeCachorro, setNomeCachorro] = useState('')
    const [update, setUpdate] = useState(false)
    const [fotoCachorro, setFotoCachorro] = useState('')
    const firstRun = useRef(true)

    const [racaCachorro, setRacaCachorro] = useState('')

    function handleChange(e: any) {
        setRacaCachorro(e.target.value)
    }

    function buscaCachorro(e: any) {
        e.preventDefault()
        setUpdate(!update)
    }

    useEffect(() => {
        if (!firstRun.current) {
            api.get(`/breed/${racaCachorro}/images/random`).then((response) => {
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

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={fotoCachorro} />
      <Card.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Raça do Cachorro</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="pug" 
                    value={racaCachorro}
                    onChange={handleChange}
                    required />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={buscaCachorro}>
                Submit 🐶
            </Button >
        </Form>
      </Card.Body>
    </Card>   
    </>
    )
}