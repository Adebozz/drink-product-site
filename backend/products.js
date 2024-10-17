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
    name: "Caprison",
    thumbnail: assets.caprison,
    texture: assets.caprison,
  },
  {
    id:4,
    name: "mocktail",
    thumbnail: assets.mocktail,
    texture: assets.mocktail,
    
  },
  {
    id:5,
    name: "cocktail",
    thumbnail: assets.cocktail,
    texture: assets.cocktail,
    
  },
  
  // Add more products as needed
];
