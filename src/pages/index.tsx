import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [professorFezChamada, setProfessorFezChamada] = useState(false);

  return (
    <>
    <NavBar pagina='home'/>
      <h1>Página Inicial</h1>
      <p>Contador de cliques: {contador}</p>
      {
        professorFezChamada ? <h1>terminou a Aula</h1>: <h1>Ainda em Aula</h1>
      }
      <br />
      <br />
      <Button variant="warning" onClick={() => setContador(contador + 1)}>Incrementar</Button>
      <Button variant="danger" onClick={() => setContador(contador - 1)}>Decrementar</Button>
      <br />
      <Button variant="primary" onClick={() => setProfessorFezChamada(!professorFezChamada)}>Chamada</Button>
    </>
  );
}