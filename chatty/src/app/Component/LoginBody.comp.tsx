"use client";

import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import React, { FormEvent } from "react";

const LoginBody = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email address" />
      <Button type="submit">Submit</Button>
    </Container>
  );
};

const Container = styled.form(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  backgroundColor: "whitesmoke",
  width: "50%",
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: "0 0 100px #a9a9a9ab",
}));

export default LoginBody;
