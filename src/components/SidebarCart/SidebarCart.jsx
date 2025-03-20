import { useSelector } from "react-redux";
import "./SidebarCart.css";
import { useState } from "react";

export default function SidebarCart() {
  // local state to control the position of sidebar
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(false);
  // getting isLoggedIn from store
  const isLoggedIn = useSelector(
    (state) => state.currentUserReducer.isLoggedIn
  );

  // ternary operator to denote the transformation applied to sidebar
  const sidebarPosition = isSidebarDisplayed
    ? "translateX(0)"
    : "translateX(100%)";

  // function that sets isSidebarDisplayed to true or false
  const toggleSidebar = () => {
    setIsSidebarDisplayed(!isSidebarDisplayed);
  };

  // only display this component if user is logged in
  if (isLoggedIn) {
    return (
      <div className="SidebarCart" style={{ transform: sidebarPosition }}>
        <button className="sidebar-tag" onClick={toggleSidebar}>
          {isSidebarDisplayed ? "HIDE CART" : "SHOW CART"}
        </button>
      </div>
    );
  } else return null;
}
