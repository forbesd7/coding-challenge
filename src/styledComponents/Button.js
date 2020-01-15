import styled from "styled-components";

const Button = styled.div`
  color: ${props => {
    if (props.selected) {
      return "white";
    } else if (props.greyed) {
      return "black";
    } else {
      return "color: rgb(35, 41, 47)";
    }
  }};
  padding: 5px 20px;
  margin-left: 20px;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${props => {
    if (props.selected) {
      return "rgb(255, 140, 0)";
    } else if (props.greyed) {
      return "grey";
    } else {
      return "white";
    }
  }};
  &:hover {
    background-color: ${props => {
      if (props.greyed) {
        return "grey";
      } else {
        return "rgb(255, 140, 0)";
      }
    }};
    color: ${props => {
      if (props.greyed) {
        return "black";
      } else {
        return "white";
      }
    }};
    cursor: ${props => (props.greyed ? "not-allowed" : "pointer")};
  }

  @media screen and (max-width: 540px) {
    margin: 7px 0;
  }
`;

export default Button;
