import { useDispatch } from "react-redux";
import "./CartProduct.css";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../store/reducers/cartReducer";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="CartProduct">
      <img
        src={product.imageURL}
        alt={`image of ${product.name}`}
        className="cart-product-img"
      />

      <div className="cart-product-information">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>

      <div className="cart-product-summary">
        <h2>Summary:</h2>

        <div className="cart-summary-amount">
          <p>Amount: </p>
          <div>
            <button
              className="counter-button decrement-quantity"
              onClick={() => {
                if (product.quantity > 1) {
                  dispatch(decrementQuantity(product));
                } else {
                  dispatch(removeProduct(product));
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
            <p className="quantity">{product.quantity}</p>
            <button
              className="counter-button increment-quantity"
              onClick={() => dispatch(incrementQuantity(product))}>
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

        <div className="cart-summary-price">
          <p className="cart-summary-price">Price:</p>
          <h3>£{(product.price * product.quantity).toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}
