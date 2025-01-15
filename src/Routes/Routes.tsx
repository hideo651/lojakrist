import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import SignupPage from "../Pages/Signup/SignupPage";
import ShopPage from "../Pages/Shop/ShopPage";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import ForgotPage from "../Pages/Forgot/ForgotPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="/produtos" element={<ShopPage />} />
        <Route path="/esqueci" element={<ForgotPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
