import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Colors";

const Wrapper = styled.div`
  min-width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: ${(props) => {
    if (props.type === "success") return COLORS.success;
    if (props.type === "error") return COLORS.error;
    if (props.type === "info") return COLORS.warning;
    return "#6d94ff";
  }};
  color: white;
  font-size: 20px;
  z-index: 9999;
`;

const Item = ({ message }) => {
  return (
    <Wrapper type={message.type}>
      <div style={{ width: "100%", textAlign: "center" }}>
        {message.caption}
      </div>
    </Wrapper>
  );
};

export default Item;
