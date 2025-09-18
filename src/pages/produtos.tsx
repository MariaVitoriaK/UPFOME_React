import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Produtos() {
  return (
    <>
     <NavBar pagina='produtos'/>
      <h1>Produtos</h1>
      <p>Lista de Produtos</p>
      <hr />
      {/*<a href="/">Home</a>*/}
      <Link href="/">Home</Link>
    </>
  );
}
