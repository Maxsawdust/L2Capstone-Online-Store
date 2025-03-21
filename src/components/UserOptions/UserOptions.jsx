import { Link } from "react-router";
import "./UserOptions.css";
import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  setCurrentUser,
} from "../../store/reducers/currentUserReducer";

export default function UserOptions() {
  const dispatch = useDispatch();

  const cartValue = useSelector(
    (state) => state.cartReducer.totalPrice
  ).toFixed(2);

  const handleClick = () => {
    // log out
    dispatch(logOut());

    // remove currentUser from store and localStorage
    dispatch(setCurrentUser({}));
  };

  return (
    <div className="UserOptions">
      <div className="options-container">
        <div className="option options-cart">
          <Link to="/cart">View cart</Link>
          <span className="options-cart-value">£{cartValue}</span>
        </div>

        <button className="pill-shape log-out-button" onClick={handleClick}>
          Log out
        </button>
      </div>
    </div>
  );
}
