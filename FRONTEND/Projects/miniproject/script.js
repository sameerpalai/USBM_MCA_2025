 // Fetch products and display them on the Products page
 async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');
    products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" alt="${product.title}"
    width="100">
    <p>$${product.price}</p>
   <button onclick="addToCart(${product.id},
    '${product.title}', ${product.price}, '${product.image}')">Add to
    Cart</button>
    `;
    productList.appendChild(productDiv);
    });
    }
    // Add product to the cart and save to local storage
    function addToCart(id, title, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, title, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} has been added to your cart!`);
    }
    // Display cart items on the Cart page
    function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
    }
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
    <h3>${item.title}</h3>
    <img src="${item.image}" alt="${item.title}" width="100">
    <p>Price: $${item.price}</p>
    <button onclick="removeFromCart(${index})">Remove from
    Cart</button>
   `;
    cartItems.appendChild(cartItemDiv);
    });
    }
    // Remove item from cart
    function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refresh the cart display
    }
    // Call functions based on the page
    if (document.getElementById('product-list')) {
    fetchProducts();
    }
    if (document.getElementById('cart-items')) {
    displayCartItems();
    }


