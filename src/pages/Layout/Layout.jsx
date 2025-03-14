import { Header } from "../../components";
import { Outlet } from "react-router";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
    </div>
  );
}
