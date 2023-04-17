import styled from "@emotion/styled";
import React from "react";

const MessageInputComp = () => {
  return (
    <Container>
      <Input type="text" placeholder="Enter the message" />
      <Button type="submit">Send</Button>
    </Container>
  );
};

export default MessageInputComp;

const Container = styled.form(() => ({
  display: "flex",
  width: "100%",
  padding: "1rem",
  gap: "1rem",
}));

const Input = styled.input(() => ({
  flex: 9,
  padding: "1rem",
  width: "max-content",
  borderRadius: "10px",
}));

const Button = styled.button(() => ({
  flex: 1,
  padding: "1rem",
  borderRadius: "10px",
}));
