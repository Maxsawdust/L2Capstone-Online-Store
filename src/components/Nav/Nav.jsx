import { Link } from "react-router";
import "./Nav.css";
import { useSelector } from "react-redux";
import { ProfileButton } from "..";

export default function Nav() {
  // REPLACE LATER
  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );

  return (
    //
    <div className="Nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/help" className="nav-link">
        Help
      </Link>
      {isLoggedIn ? (
        <ProfileButton />
      ) : (
        <div className="registration-links">
          <Link to="/login" className="nav-link">
            Log In
          </Link>
          /
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </div>
      )}
      {/* <Link to="/cart" className="nav-link">
        Cart
      </Link> */}
    </div>
  );
}
