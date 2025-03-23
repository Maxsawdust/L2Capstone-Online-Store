import { useDispatch, useSelector } from "react-redux";
import { BuyButton, CartProduct } from "../../components";
import "./Cart.css";
import { useEffect } from "react";
import {
  removeProduct,
  showSidebar,
  selectShipping,
} from "../../store/reducers/cartReducer";
import emptyCartImage from "../../assets/images/empty-cart.png";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cartReducer.products);
  const cartValue = useSelector((state) => state.cartReducer.totalPrice);
  const sidebarShown = useSelector((state) => state.cartReducer.isSidebarShown);
  const shippingMethod = useSelector(
    (state) => state.cartReducer.shippingMethod
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (sidebarShown) {
      dispatch(showSidebar(false));
    }
  }, []);

  const handleDeletion = (product) => {
    dispatch(removeProduct(product));
  };

  const handleShipping = (e) => {
    dispatch(selectShipping(e.target.value));
  };

  return (
    <div className="Cart">
      <div className="cart-container">
        <div className="cart-header">
          <h1>View your cart</h1>
        </div>

        <div className="products-in-cart">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => {
              return (
                <div className="CartProduct-container">
                  <CartProduct
                    product={product}
                    key={`${product.name}-in-cart`}
                  />
                  <div className="cart-product-deletion-div">
                    <button
                      key={`remove-${product.name}`}
                      className="cart-remove-item"
                      onClick={() => handleDeletion(product)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                    <p>remove</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty-cart-page">
              <h1>There's nothing here!</h1>
              <h2>Try adding something to your cart first.</h2>
              <img src={emptyCartImage} alt="" className="empty-cart-image" />
            </div>
          )}
        </div>

        <div className="cart-footer">
          {cartProducts.length > 0 ? (
            <>
              <div className="cart-shipping-div">
                <p>Select shipping</p>
                <select
                  className="select-shipping"
                  onChange={handleShipping}
                  defaultValue={shippingMethod}>
                  <option value="standard">Standard (£0.00)</option>
                  <option value="premium">Premium (£4.99)</option>
                </select>
              </div>
              <div className="cart-footer-total">
                <h1>Your total:</h1>
                <h1 className="cart-page-value">{cartValue.toFixed(2)}</h1>
              </div>
              <BuyButton />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
