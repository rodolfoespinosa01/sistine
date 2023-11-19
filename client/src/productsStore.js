const productsArray = [
  {
    id: "1",
    title: "Artwork",
    price: 764.99,
  },
  {
    id: "1",
    title: "Artwork2",
    price: 468.99,
  },
  {
    id: "1",
    title: "Artwork3",
    price: 445.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("product data does not exist for ID:" + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
