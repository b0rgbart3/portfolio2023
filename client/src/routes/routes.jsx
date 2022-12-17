import { Outlet } from "react-router-dom";
import DesktopMenu from "../components/DesktopMenu";
import Menu from "../components/MobileMenu"

export default function Root() {
    return (
      <>
        <Menu/>
        <DesktopMenu />
        <div id="detail">
            <Outlet/>
        </div>
      </>
    );
  }