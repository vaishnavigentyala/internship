// script.js

// Fetch products from backend
async function fetchProducts() {
    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();
    displayProducts(products);
  }
  
  // Display products on the page
  function displayProducts(products) {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsSection.appendChild(productDiv);
    });
  }
  
  // Add to cart (logic to be implemented)
  function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
  }
  
  // Initialize products on page load
  fetchProducts();
  
  // Initialize cart as an empty array
let cart = [];

// Fetch products from backend
async function fetchProducts() {
  const response = await fetch('http://localhost:5000/api/products');
  const products = await response.json();
  displayProducts(products);
}

// Display products on the page
function displayProducts(products) {
  const productsSection = document.getElementById('products');
  productsSection.innerHTML = '';

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsSection.appendChild(productDiv);
  });
}

// Add product to the cart
function addToCart(productId) {
  fetch('http://localhost:5000/api/products') // Fetch product data
    .then(res => res.json())
    .then(products => {
      const product = products.find(item => item.id === productId);
      if (product) {
        cart.push(product);
        alert(`${product.name} added to cart!`);
      }
    });
}

// View Cart and Calculate Total Price
function viewCart() {
  if (cart.length === 0) {
    alert('Cart is empty!');
    return;
  }

  let cartDetails = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join('\n');
  let total = cart.reduce((sum, item) => sum + item.price, 0);

  alert(`Your Cart:\n\n${cartDetails}\n\nTotal: $${total.toFixed(2)}`);
}

// Add a View Cart button
const viewCartButton = document.createElement('button');
viewCartButton.textContent = 'View Cart';
viewCartButton.style.margin = '20px';
viewCartButton.onclick = viewCart;

document.body.appendChild(viewCartButton);

// Initialize products on page load
fetchProducts();

  