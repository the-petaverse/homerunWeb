import { useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ProtectedRoutes = () => {
  const cookies = new Cookies();

  let registeredCookies = cookies.get("resgitered");
  const navigate = useNavigate();

  useEffect(() => {
    if (registeredCookies === undefined) {
      navigate("/register", { replace: true });
    }
  }, [registeredCookies, navigate]);

  return registeredCookies !== undefined ? (
    <Outlet />
  ) : (
    <Navigate to="/register" />
  );
};

export default ProtectedRoutes;
