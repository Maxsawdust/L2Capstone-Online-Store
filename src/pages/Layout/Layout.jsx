import { Header } from "../../components";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
    </div>
  );
}
