const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Simulated product data
const products = [
  { id: 1, name: "Product 1", price: 10.0, image: "https://d2g44tvvp35wo2.cloudfront.net/photo/global/2022/02/09/Samsung_Galaxy-S22-Ultra_Burgundy.jpg" },
  { id: 2, name: "Product 2", price: 15.0, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 20.0, image: "https://via.placeholder.com/150" },
];

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
