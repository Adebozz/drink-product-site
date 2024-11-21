const assets = require("../src/assets/assets");

module.exports = [
  {
    id: 1,
    name: "Tropical Juice",
    thumbnail: assets.tropical,  // Corrected syntax
    texture: assets.tropical,    // Corrected syntax
  },
  {
    id: 2,
    name: "Berry Blast",
    thumbnail: assets.drink,
    texture: assets.drink,
  },
  {
    id: 3,
    name: "Cocktail",
    thumbnail: assets.cocktail,
    texture: assets.cocktail,
  },

  
  // Add more products as needed
];
