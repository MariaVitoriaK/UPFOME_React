import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

type NavBarProps = {
    pagina: string;
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
            {pagina != 'produdos' && <Nav.Link as={Link} href="/produtos">Product</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}