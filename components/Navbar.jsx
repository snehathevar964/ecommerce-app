import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/products" style={{ marginRight: "20px" }}>Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
