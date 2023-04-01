import { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import store from "./api/store";
import AccessValidator from "./common/AccessValidator";
import { ROUTES } from "./common/route/Routes";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleCheckLogin = () => {
    const user = store.getUser();
    // if (!user) {
    //   navigate("/login");
    //   return;
    // }

    if (pathname === "/") {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleCheckLogin();
  }, []);

  return (
    <div>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={
              <AccessValidator access={route.access} name={route.name}>
                {route.component}
              </AccessValidator>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
