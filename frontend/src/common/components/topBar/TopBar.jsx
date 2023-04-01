import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import store from "../../../api/store";
import { COLORS } from "../../Colors";
import LogoutIcon from "@mui/icons-material/Logout";

const Wrapper = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  max-height: 60px;
  background-color: white;
  border-bottom: 2px solid ${COLORS.blue};
`;

const Title = styled.h1`
  color: ${COLORS.blue};
  font-size: 46px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const UserName = styled.h2`
  color: ${COLORS.blue};
`;

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    store.logOut();
    navigate("/login");
  };

  return (
    <Wrapper>
      <Title onClick={() => navigate("/dashboard")}>CRM</Title>
      <Container>
        <UserName>{store.getUser()?.username}</UserName>
        <LogoutIcon
          color="error"
          style={{ cursor: "pointer" }}
          onClick={() => handleLogout()}
        />
      </Container>
    </Wrapper>
  );
};

export default TopBar;
