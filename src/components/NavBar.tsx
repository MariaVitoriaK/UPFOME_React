import { doLogoff } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";

type NavBarProps = {
    pagina: string;
}

const router = useRouter();

function handleLogoff() {
    doLogoff();
    router.replace("/login");
}

export default function NavBar({pagina}: NavBarProps){
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} href="#">{pagina}</Navbar.Brand>
          <Nav className="me-auto">
            {pagina != 'home' && <Nav.Link as={Link} href="/">Home</Nav.Link>}
            {pagina != 'usuarios' && <Nav.Link as={Link} href="/usuarios">User</Nav.Link>}
            {pagina != 'produtos' && <Nav.Link as={Link} href="/produtos">Product</Nav.Link>}
            {pagina != 'dogs' && <Nav.Link as={Link} href="/cachorros">Dogs</Nav.Link>}
          </Nav>
          <Nav.Link onClick={() => handleLogoff} as={Link} href="/login">
            Log Off
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}