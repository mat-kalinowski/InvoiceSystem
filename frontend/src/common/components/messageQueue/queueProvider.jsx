import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

export default function useMessageQueue() {
  const [messages, setMessages] = useState([]);

  const ref = useRef();
  ref.current = messages;

  const handleAddMessge = (currentMessages, newMessage) => {
    return [newMessage, ...currentMessages.slice(0, 1)];
  };

  function addMessage(caption, type = "info", timeout = 3000) {
    const id = uuid();
    setMessages((prev) =>
      handleAddMessge(prev, {
        id,
        type,
        caption,
        timeout: setTimeout(() => {
          removeMessage(id);
        }, timeout),
      })
    );
  }

  function removeMessage(id) {
    setMessages(ref.current.filter((msg) => msg.id !== id));
  }

  return { addMessage, removeMessage, messages };
}
