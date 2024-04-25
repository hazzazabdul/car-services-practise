import { Outlet } from "react-router-dom";
import FooterComponent from "../Pages/Shared/Footer/FooterComponent";
import NavbarComponent from "../Pages/Shared/Navbar/NavbarComponent";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
