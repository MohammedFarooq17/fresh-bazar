
import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Fresh Apples", price: 120, emoji: "🍎" },
  { id: 2, name: "Bananas", price: 50, emoji: "🍌" },
  { id: 3, name: "Tomatoes", price: 40, emoji: "🍅" },
  { id: 4, name: "Fresh Milk", price: 60, emoji: "🥛" },
  { id: 5, name: "Carrots", price: 45, emoji: "🥕" },
  { id: 6, name: "Broccoli", price: 80, emoji: "🥦" },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((current) =>
      current.filter((_, index) => index !== indexToRemove)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <header className="header">
        <h1>🥬 Fresh Bazar</h1>
        <div className="cart-count">🛒 Cart: {cart.length}</div>
      </header>

      <section className="hero">
        <h2>Fresh Groceries, Delivered to Your Door!</h2>
        <p>Shop fresh fruits and vegetables at affordable prices.</p>
      </section>

      <main className="container">
        <h2 className="section-title">Our Fresh Products</h2>

        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="emoji">{product.emoji}</div>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>

              <button
                className="add-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <section className="cart">
          <h2>Your Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={`${item.id}-${index}`}>
                <span className="cart-product">
                  {item.emoji} {item.name} - ₹{item.price}
                </span>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))
          )}

          <h3 className="total">Total: ₹{total}</h3>
        </section>
      </main>

      <footer>
        <p>© 2026 Fresh Bazar | Freshness Delivered Daily</p>
      </footer>
    </div>
  );
}

export default App;
