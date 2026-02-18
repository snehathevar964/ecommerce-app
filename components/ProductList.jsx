import laptopImg from "../assets/laptop.jpg";
import phoneImg from "../assets/phone.jpg";
import headphonesImg from "../assets/headphones.jpg";
import smartwatchImg from "../assets/smartwatch.jpg";
import tabletImg from "../assets/tablet.jpg";
import cameraImg from "../assets/camera.jpg";

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 50000, image: laptopImg },
    { id: 2, name: "Phone", price: 20000, image: phoneImg },
    { id: 3, name: "Headphones", price: 2000, image: headphonesImg },
    { id: 4, name: "Smartwatch", price: 8000, image: smartwatchImg },
    { id: 5, name: "Tablet", price: 15000, image: tabletImg },
    { id: 6, name: "Camera", price: 30000, image: cameraImg },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: "20px" }}>
          <img src={p.image} alt={p.name} width="150" />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
