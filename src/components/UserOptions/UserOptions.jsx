import { Link } from "react-router";
import "./UserOptions.css";
import { useDispatch } from "react-redux";
import {
  logOut,
  setCurrentUser,
} from "../../store/reducers/currentUserReducer";

export default function UserOptions() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
    dispatch(setCurrentUser({}));
  };

  return (
    <div className="UserOptions">
      <div className="options-container">
        <div className="option options-cart">
          <Link to="/cart">View cart</Link>
          <span className="options-cart-value">£0.00</span>
        </div>

        <div className="option options-edit-profile">
          <Link to="/profile">Edit profile</Link>
        </div>

        <button className="pill-shape log-out-button" onClick={handleClick}>
          Log out
        </button>
      </div>
    </div>
  );
}
