"use client";

import styled from "@emotion/styled";
import UserListComponent from "./UserList.comp";
import Header from "./Header.comp";

const Sidebar = () => {
  return (
    <Container>
      <Header user={null} />
      <UserListContainer>
        <UserListComponent
          avatar={undefined}
          name={"Yogesh"}
          message={" Hey Yogesh"}
        />

        <UserListComponent
          avatar={undefined}
          name={"Yogesh"}
          message={" Hey Yogesh"}
        />
        <UserListComponent
          avatar={undefined}
          name={"Yogesh"}
          message={" Hey Yogesh"}
        />
        <UserListComponent
          avatar={undefined}
          name={"Yogesh"}
          message={" Hey Yogesh"}
        />
        <UserListComponent
          avatar={undefined}
          name={"Yogesh"}
          message={" Hey Yogesh"}
        />
        <UserListComponent
          avatar={undefined}
          name={"Yogesh"}
          message={" Hey Yogesh"}
        />
      </UserListContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  width: "20%",
  backgroundColor: "#879DEB",
  minHeight: "100%",
}));

const UserListContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  overflowY: "scroll",
  overflowx: "hidden",
  minheight:"100%"
}));
