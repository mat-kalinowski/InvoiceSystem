import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { createUser, updateUser } from "../../api/repositories/user";
import PopUp from "../../common/components/common/PopUp";
import Loading from "../../common/components/loading/Loading";
import { LoginFrom } from "../../common/styles/Forms";
import { Title } from "../../common/styles/Title";
import styled from "styled-components";
import { ButtonWrapper } from "../../common/styles/wrappers";
import SelectInput from "../../common/components/common/SelectInput";
import { ROLES } from "../../common/constants/roles";

const UserAction = ({ setShow, user, addMessage, refetch }) => {
  const userUpdate = useMutation({
    mutationFn: (_id, values) => updateUser(_id, values),
    onSuccess: ({ data }) => {
      addMessage("Updated", "success", 2000);
      refetch();
      setShow(() => null);
    },
    onError: ({ message }) => {
      addMessage(message, "error", 2000);
    },
  });

  const userCreate = useMutation({
    mutationFn: (values) => createUser(values),
    onSuccess: ({ data }) => {
      refetch();
      addMessage("Created", "success", 2000);
      setShow(() => null);
    },
    onError: ({ message }) => {
      addMessage(message, "error", 2000);
    },
  });

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      if (user._id) {
        userUpdate.mutate(user._id, values);
      } else {
        userCreate.mutate(values);
      }
    },
  });

  return (
    <PopUp setShow={setShow} title={user._id ? "Update user" : "Create user"}>
      {(userUpdate.isLoading || createUser.isLoading) && <Loading />}
      <div style={{ minWidth: "400px" }}>
        <LoginFrom onSubmit={formik.handleSubmit}>
          <TextField
            id="username"
            label="Username"
            type="text"
            autoComplete="current-username"
            onChange={formik.handleChange}
            defaultValue={user?.username}
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            required={user._id ? true : false}
          />
          <SelectInput
            defaultValue={user?.role}
            label="Role"
            handleChange={formik.handleChange}
            items={ROLES}
            required={true}
          />
          <ButtonWrapper>
            <Button variant="contained" type="submit" color="error">
              Save
            </Button>
          </ButtonWrapper>
        </LoginFrom>
      </div>
    </PopUp>
  );
};

export default UserAction;
