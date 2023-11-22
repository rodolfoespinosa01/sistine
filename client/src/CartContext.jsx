import { createContext, useState } from "react";
import { artWorksArray, getArtWorkData } from "./artWorkStore";


// set empty arrow functions and define them inside CartProvider
export const CartContext = createContext({
  items: [],
  getArtWorkQuantity: () => { },
  addOneToCart: () => { },
  removeOneFromCart: () => { },
  deleteFromCart: () => { },
  getTotalCost: () => { },

});

// content (cart, addToCart, removeCart)
//Provider -> gives the React App access to all the things in the context

export function CartProvider({ children }) {
  const [cartArtWorks, setCartArtWorks] = useState([])

  // [ {id: 1, quantity: 2} ]

  function getArtWorkQuantity(id) {
    const quantity = cartArtWorks.find(artWork => artWork.id === id)?.quantity

    // give the user 0 instead of undefined if there isnt anything left in cart
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }


  function addOneToCart(id) {
    // get the initial quantity from the start to add to it after
    const quantity = getArtWorkQuantity(id)

    if (quantity === 0) {
      // artWork is not in cart condition
      setCartArtWorks(
        [
          //take all of the objects that are already in the cart and put them in fron of the array and then...
          ...cartArtWorks,

          //add the new artWork using the id from below
          {
            id: id,
            quantity: 1
          }
        ]
      )
    } else {
      // artWork is in cart condition
      setCartArtWorks(
        //go through every object inside of cart
        cartArtWorks.map(
          artWork =>
            //if the artWork we are currently on, if the id is equal to the id we pass in then change the object and add a new property of the quantity PLUS one and the overwrite the origin quanitity
            artWork.id === id //if condition
              ? { ...artWork, quantity: artWork.quantity + 1 } //if condition is true
              : artWork //if condition is false
        )
      )
    }
  }

  function removeOneFromCart(id) {
    const quantity = getArtWorkQuantity(id)

    // handle what you do if you delete one product when there is only just one in the cart
    if (quantity == 1) {
      deleteFromCart(id)
    } else {
      setCartArtWorks(

        cartArtWorks.map(
          artWork =>
            artWork.id === id ? { ...artWork, quantity: artWork.quantity - 1 } //logic to remove one from quantity
              : artWork
        )
      )

    }
  }

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the artwork to array
    setCartArtWorks(

      cartArtWorks => cartArtWorks.filter(currentArtWork => {
        return currentArtWork.id != id; //if this is true, then it will be passed over to the new array, if false it wont be passed over
      })
    )
  }

  function getTotalCost() {
    let totalCost = 0
    cartArtWorks.map((cartItem) => {
      const artWorkData = getArtWorkData(cartItem.id)
      totalCost += (artWorkData.price * cartItem.quantity)
    })
    return totalCost
  }



  const contextValue = {
    items: cartArtWorks,
    getArtWorkQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }


  return <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
}

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context

export default CartProvider