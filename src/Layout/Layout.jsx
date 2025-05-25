import Navbar from "../vendor/components/Navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../vendor/components/Footer/Footer";

function Layout() {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
