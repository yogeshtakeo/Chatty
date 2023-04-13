import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

interface IUserListProps {
  avatar: string | undefined;
  name:string;
  message:string;
}

const UserListComponent = ({ avatar, name, message }: IUserListProps) => {
  return (
    <Container>
      <Avatar src={avatar} alt="N" />
      <Content>
        <Title>{name}</Title>
        <Message>{message}</Message>
      </Content>
    </Container>
  );
};


const Container = styled.div((props) => ({
  display: "flex",
  gap: "1rem",
  alignItems:"center",
  padding:"1rem",
  [":hover"]:{
    backgroundColor:"white",
    cursor:"pointer"
  },
}));
const Content = styled.div((props) => ({
    display: "flex",
    flexDirection:"column",
    gap: "1rem",
}));
const Title = styled.h3((props) => ({}));
const Message = styled.p((props) => ({
  color: "#999",
  fontSize: "0.9rem",
}));

export default UserListComponent;
