import { Header, SidebarCart } from "../../components";
import { Outlet } from "react-router";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="Layout">
      <Header />
      <SidebarCart />
      <Outlet />
    </div>
  );
}
