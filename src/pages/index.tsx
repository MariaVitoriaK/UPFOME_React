import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  const [contador, setContador] = useState(0);


  return (
    <>
    <NavBar pagina='home'/>
      <h1>Página Inicial</h1>
      <p>Contador de cliques: {contador}</p>
      <br />
      <br />
      <Button variant="warning" onClick={() => setContador(contador + 1)}>Incrementar</Button>
      <Button variant="danger" onClick={() => setContador(contador - 1)}>Decrementar</Button>
    </>
  );
}