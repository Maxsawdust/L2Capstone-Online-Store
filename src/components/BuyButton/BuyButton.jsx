import "./BuyButton.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { clearCart, setBuyButtonText } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";

export default function BuyButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shippingMethod = useSelector(
    (state) => state.cartReducer.shippingMethod
  );
  const sidebarBuyButtonText = useSelector(
    (state) => state.cartReducer.buyButtonText
  );

  return (
    <button
      className="pill-shape buy-button"
      style={
        sidebarBuyButtonText === "Purchased!!"
          ? { backgroundColor: "green" }
          : null
      }
      onClick={() => {
        // dispay "Purchased" text
        dispatch(setBuyButtonText("Purchased!!"));
        // after a short delay, clear the cart, go to home page
        setTimeout(() => {
          dispatch(clearCart());
          navigate("/");
          dispatch(setBuyButtonText("Buy"));
        }, 1500);
      }}>
      {sidebarBuyButtonText}
    </button>
  );
}
