import styled from "@emotion/styled";

const ChatBoxComponent = () => {
  return (
    <Container>
      <Message left>
        <Span left> Hi Jyoti! How you doing 1</Span>
      </Message>
      <Message>
        {" "}
        <Span>Hi Jyoti! How you doing 2</Span>
      </Message>
    </Container>
  );
};

export default ChatBoxComponent;

const Container = styled.div(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column-reverse",
  padding:"1rem",
  gap:"1rem"

}));
const Message = styled.div((props) => ({
  float: "inherit",
  display: "flex",
  flexDirection: props.left ? "row-reverse" : "row",
}));

const Span = styled.p((props) => ({
  padding: "1rem",
  border: props.left ? "1px solid #879deba1" : " 1px solid #ccc",
  background: props.left ? "#879deba1" : "white",
  width: "fit-content",
  borderRadius: props.left ? "10px 10px 0  10px" : "10px 10px 10px  0",
}));
