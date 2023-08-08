import { Outlet } from "react-router-dom";
import "./Layout.css";
import NavComponent from "./Navigation/NavComponent";

function Layout() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <main id="main">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Layout;
