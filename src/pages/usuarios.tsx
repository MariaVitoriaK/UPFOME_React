import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Usuarios() {
  return (
    <>
      <NavBar pagina='usuarios'/>
      <h1>Usuários</h1>
      <p>Lista de usuários</p>
      <hr />
      {/*<a href="/">Home</a>*/}
      <Link href="/">Home</Link>
    </>
  );
}
 