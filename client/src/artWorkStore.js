// an array of objects with 3 properties of id, title, and price

const artWorksArray = [
  {
    id: "price_1OEFuYCJ8PraGfLbnOtDqHhz",
    title: "Bird Painting",
    price: 764.99,
    photo: "/img/artBirdPainting.png",
  },
  {
    id: "price_1OEFvdCJ8PraGfLb7CftN25T",
    title: "Color Explosion",
    price: 468.99,
    photo: "/img/ArtColorExplosion.jpeg",
  },
  {
    id: "price_1OEFwACJ8PraGfLbK8RtwYvj",
    title: "Colorful Figures",
    price: 445.99,
    photo: "/img/artColorFigures.jpeg",
  },
  {
    id: "price_1OEbdGCJ8PraGfLbltoCDA8O",
    title: "Lady Painting",
    price: 349.99,
    photo: "/img/artLadyPainting.avif",
  },
  {
    id: "price_1OEbdmCJ8PraGfLb6Kn9rfJ8",
    title: "Leafs Painting",
    price: 968.99,
    photo: "/img/ArtLeafsPainting2.jpeg",
  },
  {
    id: "price_1OEbemCJ8PraGfLbTVJb2NAy",
    title: "Cactus Photo Print.",
    price: 445.99,
    photo: "/img/cactusPhotoPrint.png",
  },
  {
    id: "price_1OEbfMCJ8PraGfLbaETX4A5i",
    title: "Street-Art Throwing",
    price: 764.99,
    photo: "/img/graffitiThrowing.jpeg",
  },
  {
    id: "price_1OEbfnCJ8PraGfLbwQtq8xW2",
    title: "Country Mountain Sunrise",
    price: 468.99,
    photo: "/img/landCountryMountainsSunrise.png",
  },
  {
    id: "price_1OEbgGCJ8PraGfLbULgAttxz",
    title: "Mountain Sky Lake Photo",
    price: 405.99,
    photo: "/img/MountainsSkyWaterPhoto.jpeg",
  },
  {
    id: "price_1OEbgkCJ8PraGfLbbB3H8Jjx",
    title: "Pastel Painting Dude in Hat",
    price: 164.99,
    photo: "/img/pastelPaintingDudeinHat.png",
  },
  {
    id: "price_1OEbh1CJ8PraGfLbFP4bqn3u",
    title: "River Sunset Painting",
    price: 238.99,
    photo: "/img/riverSunsetPainting.png",
  },
  {
    id: "price_1OEbhSCJ8PraGfLbzgVHWphM",
    title: "StreetArt Explosion of Color",
    price: 45.99,
    photo: "/img/StreetArtGraffiti.avif",
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
