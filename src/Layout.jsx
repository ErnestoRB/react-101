import { Outlet } from "react-router-dom";
import "./Layout.css";
import NavComponent from "./Navigation/NavComponent";
import OverlayComponent from "./Overlay/OverLayComponent";

function Layout() {
  return (
    <OverlayComponent>
      <div className="App">
        <NavComponent></NavComponent>
        <main id="main">
          <Outlet></Outlet>
        </main>
      </div>
    </OverlayComponent>
  );
}

export default Layout;
