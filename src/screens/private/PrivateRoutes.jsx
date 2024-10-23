import { useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import Login from "../../pages/auth/login/Login";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  // persistor.purge();
  // let registeredCookies = cookies.get("resgitered");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.accessToken === null) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return auth.user !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
