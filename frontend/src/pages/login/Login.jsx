import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { COLORS } from "../../common/Colors";
import { useFormik } from "formik";
import store from "../../api/store";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MessageQueue, {
  useMessageQueue,
} from "../../common/components/messageQueue";
import { login } from "../../api/repositories/user";
import Loading from "../../common/components/loading/Loading";
import { Wrapper } from "../../common/styles/wrappers";

const Card = styled.div`
  padding: 40px 40px;
  width: 320px;
  height: 400px;
  background: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${COLORS.blue};
  font-size: 48px;
`;

const LoginFrom = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  button {
    margin-top: 30px;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const { addMessage, messages, removeMessage } = useMessageQueue();

  const mutation = useMutation({
    mutationFn: (values) => login(values),
    onSuccess: ({ data }) => {
      const { accessToken, refreshToken } = data;
      store.setTokens(accessToken, refreshToken);
      addMessage("navigating to dashboard", "success", 2000);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    },
    onError: ({ message }) => {
      addMessage(message, "error", 2000);
      setDisabled(() => false);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setDisabled(() => true);
      mutation.mutate(values);
    },
  });

  return (
    <Wrapper>
      {mutation.isLoading && <Loading />}
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <Card>
        <Title>Sign in</Title>
        <LoginFrom onSubmit={formik.handleSubmit}>
          <TextField
            id="username"
            label="Username"
            type="text"
            autoComplete="current-username"
            onChange={formik.handleChange}
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            required
          />
          <Button variant="contained" type="submit" disabled={disabled}>
            Login
          </Button>
        </LoginFrom>
      </Card>
    </Wrapper>
  );
};

export default Login;
