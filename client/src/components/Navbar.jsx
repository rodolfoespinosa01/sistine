import { Button, Container, Navbar, Modal } from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 items</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent