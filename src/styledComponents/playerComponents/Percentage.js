import styled from "styled-components";

const Percentage = styled.div.attrs(props => ({
  hoverState: props.hoverState
}))`
  font-size: 14px;
  padding: 3px;
  background: ${props =>
    props.hoverState === "selected" ? "rgb(255,140,0)" : "#a9a9a9"};
  width: 50px;
  height: 18px;
  text-align: center;
  margin-bottom: -12px;
  color: ${props => (props.hoverState === "selected" ? "white" : "black")};
  z-index: 2;

  border-radius: 5px;
`;

export default Percentage;
