import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import store from "../api/store";
import Navigation from "./components/topBar/TopBar";

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const AccessValidator = ({ access, name, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = store.getUser();

  document.title = name;

  useEffect(() => {
    if (
      !user ||
      (!access.includes(user.role) && user.role !== "ADMIN") ||
      location.pathname === "/"
    ) {
      store.logOut();
      navigate("/login");
    }
  }, []);

  return <PageWrapper>{children}</PageWrapper>;
};

export default AccessValidator;
