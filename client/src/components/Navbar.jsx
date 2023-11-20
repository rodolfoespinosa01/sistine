
import { Button, Container, Navbar, Modal, ModalBody } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { CartContext } from '../CartContext'
import CartArtWork from './CartArtWork'

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false); //set to false to make sure it doesnt show at initial load
  const handleClose = () => setShow(false); //create function to handle the hide
  const handleShow = () => setShow(true); //create function to handle the show

  const checkout = async () => {
    await fetch('http://localhost:3553/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.url) {
        window.location.assign(response.url);
      }
    })

  }

  const artWorksCount = cart.items.reduce((sum, artWork) => sum + artWork.quantity, 0);
  return (
    <>

      <Navbar expand="sm">
        <Navbar.Brand href="/">Sistine Art-Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({artWorksCount})</Button>
        </Navbar.Collapse>
      </Navbar>

      {/* bring in attributes to modal to handle show and hide state */}
      <Modal show={show} onHide={handleClose}>

        {/* add closeButton attribute to give the user the x to close out modal */}
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>

        </Modal.Header>
        <ModalBody>
          {artWorksCount > 0 ?

            <>

              <p>Items in your cart:</p>
              {cart.items.map((currentArtWork, index) => (

                <CartArtWork key={index} id={currentArtWork.id} quantity={currentArtWork.quantity}></CartArtWork>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={checkout}>
                Purchase items!
              </Button>

            </>
            :
            <h1>Thare no items in your cart</h1>
          }

        </ModalBody>
      </Modal>

    </>
  )
}

export default NavbarComponent