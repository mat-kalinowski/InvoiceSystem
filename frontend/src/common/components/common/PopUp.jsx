import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { Title } from "../../styles/Title";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(3, 169, 244, 0.7);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
  position: relative;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -20px;
`;

const PopUp = ({ children, setShow, title = "Add title bro" }) => {
  return (
    <Wrapper>
      <Card>
        <IconWrapper>
          <Title>{title}</Title>
          <ClearIcon
            style={{ cursor: "pointer" }}
            color="error"
            onClick={() => setShow(() => null)}
          />
        </IconWrapper>
        {children}
      </Card>
    </Wrapper>
  );
};

export default PopUp;
