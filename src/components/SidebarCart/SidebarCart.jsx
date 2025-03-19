import "./SidebarCart.css";

export default function SidebarCart() {
  let isSidebarDisplayed = false;

  return (
    //
    <div className="SidebarCart">{isSidebarDisplayed ? <></> : null}</div>
  );
}
