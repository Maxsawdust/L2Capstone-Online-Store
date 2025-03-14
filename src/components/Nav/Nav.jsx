import { Link } from "react-router";
import "./Nav.css";

export default function Nav() {
  // REPLACE LATER
  let isLoggedIn = false;

  return (
    //
    <div className="Nav">
      <Link to="/about" className="nav-link">
        About
      </Link>
      {isLoggedIn ? (
        "profile"
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
      <Link className="nav-link">Cart</Link>
    </div>
  );
}
