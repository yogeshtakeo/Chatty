import styled from "@emotion/styled";
import { InfoOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
const ChatHeaderComponent = () => {
  return (
    <Container>
      <ContentContainer>
        <Avatar src={"Jyoti Neupane"} alt={"Jyoti Neupane"} />
        <Title> Jyoti Neupane</Title>
      </ContentContainer>
      <ActionsContainer>
        <InfoOutlined />
      </ActionsContainer>
    </Container>
  );
};

export default ChatHeaderComponent;

const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 1rem",
  placeItems: "center",
  boxShadow: "0 -5px 10px #2b2b2b0d",
}));
const ContentContainer = styled.div(() => ({
  display: "flex",
  placeItems: "center",
  gap: "1rem",
}));
const Title = styled.h2(() => ({}));
const ActionsContainer = styled.div(() => ({}));
