// an array of objects with 3 properties of id, title, and price

const artWorksArray = [
  {
    id: "price_1OEFuYCJ8PraGfLbnOtDqHhz",
    title: "Artwork1",
    price: 764.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "price_1OEFvdCJ8PraGfLb7CftN25T",
    title: "Artwork2",
    price: 468.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "price_1OEFwACJ8PraGfLbK8RtwYvj",
    title: "Artwork3",
    price: 445.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "4",
    title: "Artwork4",
    price: 764.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "5",
    title: "Artwork5",
    price: 468.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "6",
    title: "Artwork6",
    price: 445.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "7",
    title: "Artwork7",
    price: 764.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "8",
    title: "Artwork8",
    price: 468.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "9",
    title: "Artwork9",
    price: 405.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "10",
    title: "Artwork10",
    price: 164.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "11",
    title: "Artwork11",
    price: 238.99,
    photo: "/img/400x600.svg",
  },
  {
    id: "12",
    title: "Artwork12",
    price: 45.99,
    photo: "/img/400x600.svg",
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
