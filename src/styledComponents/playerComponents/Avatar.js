import styled from "styled-components";

const Avatar = styled.img.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  hoverState: props.hoverState
}))`
  height: 40%;
  width: 90%;
  border: ${props =>
    props.hoverState === "selected" ? "7px orange solid" : "7px grey solid"};
  border-radius: 100px;

  &:hover {
    border: ${props => {
      if (props.hoverState === "noHover") {
        return "7px grey solid";
      } else if (props.hoverState === "selected") {
        return "7px orange solid";
      } else {
        //here can check if length of selected people is 3, if so then keep hover to same color
        return "7px white solid";
      }
    }}

  @media screen and (max-width: 540px) {
  }
`;

export default Avatar;
