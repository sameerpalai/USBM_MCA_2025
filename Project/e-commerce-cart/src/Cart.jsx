import React from 'react';
import { useCart } from './cartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, event) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      min="1"
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
