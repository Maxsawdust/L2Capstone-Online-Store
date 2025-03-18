import { Link } from "react-router";
import { storeInventory } from "../../utils/storeInventory";
import "./ProductCategoryCard.css";

export default function ProductCategoryCard({ type }) {
  return (
    <Link className="ProductCategoryCard">
      <p className="category-name">{type.toUpperCase()}</p>
      <div className="product-images">
        <div>
          {storeInventory.categories[type].products.map((product) => {
            return <img src={product.imageURL} />;
          })}
        </div>
      </div>
    </Link>
  );
}
