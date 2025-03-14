import "./Header.css";
import { Link } from "react-router";
import shopLogo from "../../assets/images/shop-logo.jpg";
import { ThemeSwitch } from "../";

export default function Header() {
  return (
    //
    <div className="Header">
      <Link className="logo-container" to="/">
        {/* DISCLAIMER: This logo was made using AI. I'm not a fan of using AI,
            but since it's a fake online store, it seemed okay. */}
        <img src={shopLogo} alt="" className="shop-logo" />
      </Link>
      <ThemeSwitch />
      {/* SearchBar */}
      {/* Nav */}
      {/* Profile */}
    </div>
  );
}
