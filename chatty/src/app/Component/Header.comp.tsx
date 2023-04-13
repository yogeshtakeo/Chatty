import { MoreVert } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styled from "@emotion/styled";

const Header = ({ user }) => {
  return (
    <Container>
      <Avatar />
      <MoreVert />
    </Container>
  );
};

const Container = styled.div(() => ({
  display: "flex",
  justifyContent:"space-between",
  padding:"2rem 1rem"
}));

export default Header;
