import { createContext, useState } from "react";
import { artWorkArray } from "./artStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addOneToCart: () => { },
  removeOnceFromCart: () => { },
  deleteFromCart: () => { },
  getTotalCost: () => { },

})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  // [ {id: 1, quantity: 2} ]

  function getProductQuantity(id) {
    cartProducts.find(product => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      // product is not in cart
      setCartProducts(
        [
          ...cartProducts,
          {
            id: id,
            quantity: 1
          }
        ]
      )
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map(
          product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 }
              : product
        )
      )
    }
  }

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the pobects to array
    setCartProducts(
      cartProducts => cartProducts.filter(currentProduct => {
        return currentProduct.id != id;
      })
    )
  }


  const contextValue = {
    items: cartProducts,
    getProductQuantity,
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