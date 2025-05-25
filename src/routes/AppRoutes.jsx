import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../vendor/pages/Dashboard/Dashboard";
import Orders from "../vendor/pages/Orders/Orders";
import Settings from "../vendor/pages/Settings/Settings";
import Menu from "../vendor/pages/Menu/Menu";
import Login from "../user/pages/Login";
import ProtectedRoute from "../auth/ProtectedRoutes";
import Vendor from "../superAdmin/pages/Vendor";
import Notifications from "../superAdmin/pages/Notifications";
import Core from "../superAdmin/pages/Core";
import UserPage from "../user/pages/UserPage";
import Cart from "../user/components/Cart";
import Landing from "../user/pages/Landing";
import Pricing from "../user/pages/Pricing";
import About from "../user/pages/About";
import LandingLayout from "../Layout/LandingLayout";
import Terms from "../user/pages/Terms";
import FAQ from "../user/pages/FAQ";
import ScrollTop from "./ScrollTop";
import NotFoundPage from "./NotFoundPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Route path="*" element={<NotFoundPage />}/>
      <Routes>
        {/* Public Routes */}
        <Route path="/user/:vendorId" element={<UserPage />} />
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>

        {/* Super Admin Routes  */}
        <Route
          path="/vendor-new"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <Vendor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/core"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <Core />
            </ProtectedRoute>
          }
        />

        {/* Vendors Routes  */}

        <Route
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
