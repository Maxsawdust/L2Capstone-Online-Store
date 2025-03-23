import { useDispatch, useSelector } from "react-redux";
import "./SidebarCart.css";
import { showSidebar } from "../../store/reducers/cartReducer";
import emptyCartImage from "../../assets/images/empty-cart.png";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  selectShipping,
} from "../../store/reducers/cartReducer";
import { useNavigate } from "react-router";
import BuyButton from "../BuyButton/BuyButton";

export default function SidebarCart() {
  // getting sidebar display state from store
  const sidebarShown = useSelector((state) => state.cartReducer.isSidebarShown);
  const shippingMethod = useSelector(
    (state) => state.cartReducer.shippingMethod
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // getting isLoggedIn from store
  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );
  // getting cart object from store
  const cart = useSelector((state) => state.cartReducer);

  const sidebarBuyButtonText = useSelector(
    (state) => state.cartReducer.buyButtonText
  );

  // function that sets sidebarShown to true or false
  const toggleSidebar = () => {
    dispatch(showSidebar(!sidebarShown));
  };

  const handleShipping = (e) => {
    dispatch(selectShipping(e.target.value));
  };

  // object containing sidebar contents
  const sidebarContents = {
    // contents if the cart is empty
    cartEmpty: (
      <div className="empty-cart">
        <h2>There's nothing here!</h2>
        <h3>Try buying a product</h3>
        <img
          src={emptyCartImage}
          alt="an empty shopping cart"
          className="empty-cart-image"
        />
      </div>
    ),

    // contents if the cart is occupied
    cartOccupied: (
      <>
        <button className="pill-shape" onClick={() => navigate("/cart")}>
          View Cart
        </button>
        <div className="list-of-products">
          {/* mapping through products to render a product */}
          {cart.products.map((product) => {
            return (
              <div className="product-in-cart" key={`cart-${product.name}`}>
                <div>
                  <p className="cart-product-name">{product.name}</p>
                  <div className="sidebar-amount-and-buttons">
                    <p className="cart-product-quantity">Amount: </p>
                    {/* buttons to increment and decrement quantity of product */}
                    <div className="sidebar-counter-buttons">
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
                </div>
                <p className="total-product-price">
                  £{(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>
        {/* footer for the cart */}
        <div className="sidebar-footer">
          <div className="sidebar-shipping-options">
            <p>Select your shipping</p>

            {/* select element which handles shipping options */}
            <select
              className="select-shipping"
              onChange={handleShipping}
              defaultValue={shippingMethod}>
              <option value="standard">Standard (£0.00)</option>
              <option value="premium">Premium (£4.99)</option>
            </select>
          </div>

          <h2 className="cart-total-price">
            Total Price: {cart.totalPrice.toFixed(2)}
          </h2>

          {/* Buy button */}
          <BuyButton />
        </div>
      </>
    ),
  };

  // only display this component if user is logged in
  if (isLoggedIn) {
    return (
      <div
        className="SidebarCart"
        // dynamic styling to display the sidebar cart on button click
        style={{
          transform: sidebarShown ? "translateX(0)" : "translateX(100%)",
        }}>
        {/* button text changes on click */}
        <button className="sidebar-tag" onClick={toggleSidebar}>
          {sidebarShown ? "HIDE CART" : "SHOW CART"}
        </button>

        {/* contents of cart change depending on what's in the cart in store */}
        <div className="sidebar-cart-contents">
          {cart.products.length > 0
            ? sidebarContents.cartOccupied
            : sidebarContents.cartEmpty}
        </div>
      </div>
    );
  } else return null;
}
