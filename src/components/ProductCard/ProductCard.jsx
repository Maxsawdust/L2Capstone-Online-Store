import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    //
    <div className="ProductCard">
      <div>
        <h3 className="product-name">{product.name}</h3>
        <img src={product.imageURL} alt="" className="product-image" />
        <p className="product-description">{product.description}</p>
      </div>
      <button className="pill-shape add-to-cart">Add to cart</button>
      <div className="product-quantity"></div>
    </div>
  );
}
