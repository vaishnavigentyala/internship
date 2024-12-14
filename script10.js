const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 699, rating: 4.5 },
    { id: 2, name: "Laptop", category: "electronics", price: 999, rating: 4.8 },
    { id: 3, name: "T-shirt", category: "clothing", price: 20, rating: 4.1 },
    { id: 4, name: "Sofa", category: "home", price: 450, rating: 4.3 },
    { id: 5, name: "Headphones", category: "electronics", price: 150, rating: 4.6 },
    { id: 6, name: "Jacket", category: "clothing", price: 80, rating: 4.2 },
  ];
  const productGrid = document.getElementById("product-grid");
  const categoryFilter = document.getElementById("category");
  const sortFilter = document.getElementById("sort");
    function renderProducts(productsToRender) {
    productGrid.innerHTML = ""; 
    productsToRender.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p class="category">Category: ${product.category}</p>
        <p class="price">Price: ₹-${product.price}</p>
        <p class="rating">Rating: ⭐${product.rating}</p>
      `;
      productGrid.appendChild(productCard);
    });
  }
    function filterProducts() {
    const category = categoryFilter.value;
    let filteredProducts = products;
  
    if (category !== "all") {
      filteredProducts = products.filter(product => product.category === category);
    }
  
    sortProducts(filteredProducts);
  }
    function sortProducts(filteredProducts) {
    const sortOption = sortFilter.value;
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOption === "rating") return b.rating - a.rating;
      if (sortOption === "priceLow") return a.price - b.price;
      if (sortOption === "priceHigh") return b.price - a.price;
    });
    renderProducts(sortedProducts);
  }
  categoryFilter.addEventListener("change", filterProducts);
  sortFilter.addEventListener("change", filterProducts);
  renderProducts(products);
  