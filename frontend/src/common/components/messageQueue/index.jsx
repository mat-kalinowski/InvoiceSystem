import React from "react";
import styled from "styled-components";
import Item from "./item";

export { default as useMessageQueue } from "./queueProvider";

const StyledMessageQueue = styled.div`
  position: fixed;
  top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  min-width: 100px;
  align-items: stretch;
`;

const MessageQueue = ({ messages = [], removeMessage }) => {
  return (
    <StyledMessageQueue>
      {messages.map((msg) => (
        <Item key={msg.id} message={msg} removeMessage={removeMessage} />
      ))}
    </StyledMessageQueue>
  );
};

export default MessageQueue;
