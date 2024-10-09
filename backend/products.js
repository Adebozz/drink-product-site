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
    name: "biggie",
    thumbnail: assets.drink,
    
  }
  // Add more products as needed
];
