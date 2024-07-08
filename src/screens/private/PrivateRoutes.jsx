import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element: Element, isAuth, ...rest }) => {
  const navigate = useNavigate();
  //Comment for dev
  useEffect(() => {
    if (!isAuth) {
      navigate("/login", { replace: true });
    }
  }, [isAuth, navigate]);

  return isAuth ? <Outlet /> : <h1>Authenticated</h1>;
};

export default PrivateRoute;
