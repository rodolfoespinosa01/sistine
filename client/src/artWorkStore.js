// an array of objects with 3 properties of id, title, and price

const artWorksArray = [
  {
    id: "1",
    title: "Artwork",
    price: 764.99,
  },
  {
    id: "2",
    title: "Artwork2",
    price: 468.99,
  },
  {
    id: "3",
    title: "Artwork3",
    price: 445.99,
  },
];

// use a function to get us a product based on an items id and include in the export
function getArtWorkData(id) {
  // loop through product and check if artWork.id is equal to the id that was passed in the parameter
  let artWorkData = artWorksArray.find((artWork) => artWork.id === id);

  // if Id doesnt exist, tell the user
  if (artWorkData == undefined) {
    console.log("artWork data does not exist for ID:" + id);
    return undefined;
  }

  return artWorkData;
}
// export the array of objects and export function to make it available
export { artWorksArray, getArtWorkData };
