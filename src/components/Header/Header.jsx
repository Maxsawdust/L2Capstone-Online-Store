import "./Header.css";
import { Link } from "react-router";
import shopLogo from "../../assets/images/shop-logo.jpg";
import { ThemeSwitch, SearchBar, Nav } from "../";
import { useSelector } from "react-redux";

export default function Header() {
  // getting the currentUser from store for welccome functionality
  const currentUser = useSelector((state) => state.currentUserReducer.user);
  // getting isLoggedIn from store
  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );

  return (
    //
    <div className="Header">
      <Link className="logo-container" to="/">
        {/* DISCLAIMER: This logo was made using AI. I'm not a fan of using AI,
            but since it's a fake online store, it seemed okay. */}
        <img src={shopLogo} alt="" className="shop-logo" />
      </Link>
      <ThemeSwitch />
      {isLoggedIn ? (
        <h1 className="welcome-message">
          {currentUser.name
            ? `Hello ${
                currentUser.name.charAt(0).toUpperCase() +
                currentUser.name.slice(1)
              }!`
            : "Hello!"}
        </h1>
      ) : null}
      <SearchBar />
      <Nav />
    </div>
  );
}
