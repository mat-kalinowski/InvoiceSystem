import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const EditionButtons = ({ path, handleAddElement }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ElementWrapper>
        <ArrowBackIcon
          color="error"
          onClick={() => navigate(path)}
          style={{ cursor: "pointer" }}
          fontSize="large"
        />
        <AddIcon
          color="success"
          onClick={() => handleAddElement({})}
          style={{ cursor: "pointer" }}
          fontSize="large"
        />
      </ElementWrapper>
    </Wrapper>
  );
};

export default EditionButtons;
