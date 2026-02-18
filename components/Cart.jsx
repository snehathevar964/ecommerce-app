function Cart({ cart, removeFromCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        cart.map(item => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <h4>{item.name} (x{item.quantity})</h4>
            <p>₹{item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;
