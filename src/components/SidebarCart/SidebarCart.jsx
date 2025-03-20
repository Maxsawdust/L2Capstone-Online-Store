import { useSelector } from "react-redux";
import "./SidebarCart.css";
import { useState } from "react";
import emptyCartImage from "../../assets/images/empty-cart.png";

export default function SidebarCart() {
  // local state to control the position of sidebar
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(false);
  // getting isLoggedIn from store
  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );
  // getting cart object from store
  const cart = useSelector((state) => state.cartReducer);

  // function that sets isSidebarDisplayed to true or false
  const toggleSidebar = () => {
    setIsSidebarDisplayed(!isSidebarDisplayed);
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
        <h2>Your cart:</h2>
        <div className="list-of-products">
          {cart.products.map((product) => {
            return (
              <div className="product-in-cart" key={`cart-${product.name}`}>
                <div>
                  <p className="cart-product-name">{product.name}</p>
                  <p className="cart-product-quantity">
                    Amount: {product.quantity}
                  </p>
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
          transform: isSidebarDisplayed ? "translateX(0)" : "translateX(100%)",
        }}>
        <button className="sidebar-tag" onClick={toggleSidebar}>
          {isSidebarDisplayed ? "HIDE CART" : "SHOW CART"}
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
