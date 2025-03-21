import { useDispatch, useSelector } from "react-redux";
import "./SidebarCart.css";
import { showSidebar } from "../../store/reducers/cartReducer";
import emptyCartImage from "../../assets/images/empty-cart.png";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} from "../../store/reducers/cartReducer";
import { Link } from "react-router";

export default function SidebarCart() {
  // getting sidebar display state from store
  const sidebarShown = useSelector((state) => state.cartReducer.isSidebarShown);
  const dispatch = useDispatch();

  // getting isLoggedIn from store
  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );
  // getting cart object from store
  const cart = useSelector((state) => state.cartReducer);

  // function that sets sidebarShown to true or false
  const toggleSidebar = () => {
    dispatch(showSidebar(!sidebarShown));
  };

  const sidebarContents = {
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

    cartOccupied: (
      <>
        <Link to="/cart">Your cart:</Link>
        <div className="list-of-products">
          {cart.products.map((product) => {
            return (
              <div className="product-in-cart" key={`cart-${product.name}`}>
                <div>
                  <p className="cart-product-name">{product.name}</p>
                  <div className="sidebar-amount-and-buttons">
                    <p className="cart-product-quantity">Amount: </p>
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
        <div className="sidebar-footer">
          <h2 className="cart-total-price">
            Total Price: {cart.totalPrice.toFixed(2)}
          </h2>
        </div>
      </>
    ),
  };

  // only display this component if user is logged in
  if (isLoggedIn) {
    return (
      <div
        className="SidebarCart"
        style={{
          transform: sidebarShown ? "translateX(0)" : "translateX(100%)",
        }}>
        <button className="sidebar-tag" onClick={toggleSidebar}>
          {sidebarShown ? "HIDE CART" : "SHOW CART"}
        </button>

        <div className="sidebar-cart-contents">
          {cart.products.length > 0
            ? sidebarContents.cartOccupied
            : sidebarContents.cartEmpty}
        </div>
      </div>
    );
  } else return null;
}
