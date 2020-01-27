import styled from "styled-components";

const Percentage = styled.div.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  hoverState: props.hoverState
}))`
  font-size: 14px;
  padding: 3px;
  background: ${props =>
    props.hoverState === "selected" ? "rgb(255,140,0)" : "#a9a9a9"};
  width: 50px;
  flex: auto;
  text-align: center;
  margin-top: 5px;
  color: ${props => (props.hoverState === "selected" ? "white" : "black")};

  border-radius: 5px;
`;

export default Percentage;
