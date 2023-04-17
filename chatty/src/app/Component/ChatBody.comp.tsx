"use client";
import React from "react";
import ChatHeaderComponent from "./ChatHeader.comp";
import styled from "@emotion/styled";
import MessageInputComp from "./MessageInput.comp";
import ChatBoxComponent from "./ChatBox.comp";

const ChatBodyComponent = () => {
  return (
    <Container>
      <ChatHeaderComponent />
      <ChatBoxComponent />
      <MessageInputComp />
    </Container>
  );
};

export default ChatBodyComponent;

const Container = styled.div(() => ({
  flex: 7,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));
