import { Outlet } from "react-router-dom";
import HomeNav from "../user/components/HomeNav";
import Footer from "../user/components/Footer";

function LandingLayout() {
  return (
    <>
      <header>
        <HomeNav />
        <Outlet />
        <Footer />
      </header>
    </>
  );
}

export default LandingLayout;
