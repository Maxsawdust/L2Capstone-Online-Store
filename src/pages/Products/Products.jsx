import { useNavigate, useParams } from "react-router";
import { storeInventory } from "../../utils/storeInventory";

export default function Products() {
  // using params to access the category type of products to be displayed
  const category = useParams().category;
  const navigate = useNavigate();

  // object to store header jsx
  const headerJSX = {
    allProducts: <h1>You're now viewing all of our products!</h1>,

    selectedCategory: (
      <>
        <h1>You're browsing our {category} products!</h1>
        <button
          className="pill-shape view-all-products"
          onClick={() => navigate("/products/all")}>
          View all products
        </button>
      </>
    ),
  };

  const getContainerJSX = () => {
    // if the category from params is valid (if it's not "all")
    if (storeInventory.categories[category]) {
      // map through the products in the category in storeInventory
      const jsx = storeInventory.categories[category].products.map(
        (product) => {
          // return the jsx
          return <p key={product.name}>{product.name}</p>;
        }
      );
      return jsx;
    } else {
      // otherwise, the param will be "all", so map through all products
      const jsx = storeInventory.allProducts.map((product) => {
        return <p key={product.name}>{product.name}</p>;
      });
      return jsx;
    }
  };

  return (
    //
    <div className="Products">
      <header className="products-header">
        {category === "all"
          ? headerJSX.allProducts
          : headerJSX.selectedCategory}
      </header>

      <div className="products-container">
        {/* mapping through the products in storeInventory to return a ProductCard */}
        {getContainerJSX()}
      </div>
    </div>
  );
}
