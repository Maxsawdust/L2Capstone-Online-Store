import { useDispatch, useSelector } from "react-redux";
import { CartProduct } from "../../components";
import "./Cart.css";
import { useEffect } from "react";
import { showSidebar } from "../../store/reducers/cartReducer";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cartReducer.products);
  const cartValue = useSelector((state) => state.cartReducer.totalPrice);

  const sidebarShown = useSelector((state) => state.cartReducer.isSidebarShown);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sidebarShown) {
      dispatch(showSidebar(false));
    }
  }, []);

  return (
    <div className="Cart">
      <div className="cart-container">
        <div className="cart-header">
          <h1>View your cart</h1>
          <div>
            <h1>Your total:</h1>
            <h1 className="cart-page-value">{cartValue}</h1>
          </div>
        </div>
        <div className="products-in-cart">
          {cartProducts.length > 0
            ? cartProducts.map((product) => {
                return <CartProduct product={product} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
