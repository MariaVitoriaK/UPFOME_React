import { doLogin } from "@/services/auth"
import { Router, useRouter } from "next/router"
import { useState } from "react"
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleUser(e: any) {
    setUser(e.target.value)
  }

  function handlePassword(e: any) {
    setPassword(e.target.value)
  }

  async function handleLogin(e: any) {
    e.preventDefault()
    const username = user
    const response = await doLogin({username, password})

    if(response.sucess) {
        router.push("/")
    } else {
        setError("Erro ao realizar o login :(")
    }
  }

  return (
    <>
      <Container className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Form onSubmit={handleLogin}>
                  <FormGroup>
                    <FormLabel>Usuário</FormLabel>
                    <FormControl
                      type="text"
                      value={user}
                      placeholder="Digite seu usuário"
                      onChange={handleUser}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      type="password"
                      value={password}
                      placeholder="Digite sua senha"
                      onChange={handlePassword}
                    ></FormControl>
                  </FormGroup>
                  <br></br>
                  {error && <p style={{color: 'red'}}>{error}</p>}
                  <Button type="submit" variant="primary">Enviar</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}