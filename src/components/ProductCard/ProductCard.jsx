import { useSelector } from "react-redux";
import "./ProductCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, showSidebar } from "../../store/reducers/cartReducer";

export default function ProductCard({ product }) {
  // local state for managing quantity
  const [productQuanitity, setProductQuantity] = useState(1);
  // local State for handling error display
  const [isLoginErrorDisplayed, setisLoginErrorDisplayed] = useState(false);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setisLoginErrorDisplayed(true);
      // timeout so message goes away
      setTimeout(() => {
        setisLoginErrorDisplayed(false);
      }, 2000);
    } else {
      // add to cart
      dispatch(addProduct({ ...product, quantity: productQuanitity }));
      // show the cart sidebar
      dispatch(showSidebar(true));
    }
  };

  return (
    <div className="ProductCard">
      <h3 className="product-name">{product.name}</h3>
      <div className="product-content">
        <img src={product.imageURL} alt="" className="product-image" />
        <p className="product-description">{product.description}</p>
        <p className="product-price">£{product.price}</p>
      </div>

      <div className="buy-section">
        <button className="pill-shape add-to-cart" onClick={handleAddToCart}>
          Add to cart
        </button>

        <div className="product-quantity">
          <button
            className="counter-button decrement-quantity"
            onClick={() => {
              if (productQuanitity > 1) {
                setProductQuantity(productQuanitity - 1);
              }
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000">
              <path d="M200-440v-80h560v80H200Z" />
            </svg>
          </button>
          <p className="quantity">{productQuanitity}</p>
          <button
            className="counter-button increment-quantity"
            onClick={() => setProductQuantity(productQuanitity + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000">
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </button>
        </div>
      </div>

      {isLoginErrorDisplayed ? (
        <div className="add-to-cart-error">Please log in to add to cart!</div>
      ) : null}
    </div>
  );
}
