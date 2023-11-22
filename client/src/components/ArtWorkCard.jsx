import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';

import '../index.css';

function ArtCard(props) { // props.artWork is the artWork we are selling and gives us access to all the info of the artWork
  const artWork = props.artWork;
  const cart = useContext(CartContext);
  const artWorkQuantity = cart.getArtWorkQuantity(artWork.id) //allow us to see if we have an item inside the cart

  return (
    <Card>

      <Card.Body>
        <Card.Title>{artWork.title}</Card.Title>
        <Card.Img src={artWork.photo} alt={artWork.title} />
        <Card.Text>${artWork.price}</Card.Text>
        {artWorkQuantity > 0 ?
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">In Cart: {artWorkQuantity}</Form.Label>
              <Col sm="6">
                <Button sm="6" onClick={() => cart.addOneToCart(artWork.id)} className="mx-2 btn btn-custom">+</Button>
                <Button sm="6" onClick={() => cart.removeOneFromCart(artWork.id)} className="mx-2 btn btn-custom">-</Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.deleteFromCart(artWork.id)} className="my-2">Remove from cart</Button>
          </>
          :
          <Button className='btn btn-custom' onClick={() => cart.addOneToCart(artWork.id)}>Add to Cart</Button>
        }

      </Card.Body>
    </Card>
  )

}

export default ArtCard