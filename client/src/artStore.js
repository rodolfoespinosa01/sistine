const artWorkArray = [
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

function getArtWorkData(id) {
  let artWorkData = artWorkArray.find((artWork) => artWork.id === id);

  if (artWorkData == undefined) {
    console.log("artWork data does not exist for ID:" + id);
    return undefined;
  }

  return artWorkData;
}

export { artWorkArray, getArtWorkData };
