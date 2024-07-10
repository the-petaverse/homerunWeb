import { useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import Login from "../login/Login";
import Cookies from "universal-cookie";

const PrivateRoute = () => {
  const cookies = new Cookies();

  let getCookies = cookies.get("auth_token");
  let registeredCookies = cookies.get("resgitered");
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookies === undefined) {
      navigate("/login", { replace: true });
    }
  }, [getCookies, navigate]);

  return getCookies !== undefined ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
