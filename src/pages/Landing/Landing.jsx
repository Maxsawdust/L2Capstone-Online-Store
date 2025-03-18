import { useSelector } from "react-redux";
import { ProductCategoryCard } from "../../components";
import { products } from "../../utils/storeInventory";
import "./Landing.css";

export default function Landing() {
  // getting the currentUser from store for header functionality
  const currentUser = useSelector((state) => state.currentUserReducer.user);
  if (currentUser.name) {
    const username =
      currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1);
  }

  console.log(products);

  return (
    <div className="Landing">
      <div className="landing-header">
        <h1 className="welcome-message">
          {currentUser.name ? `Hello ${username}!` : "Hello!"}
        </h1>
        <h2 className="welcome-message">Welcome to Saunders' superstore!</h2>
      </div>

      <div className="product-categories">
        <h2>Browse by category</h2>
        <div className="category-carousel">
          <button className="left-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#000">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>

          <button className="right-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#000">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
