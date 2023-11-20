import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getArtWorkData } from '../artWorkStore'

function CartArtWork(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const artWorkData = getArtWorkData(id);

  return (
    <>
      <h3>{artWorkData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * artWorkData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr />
    </>
  )
}

export default CartArtWork