import styled from "styled-components";

const Avatar = styled.img`
  height: 40%;
  width: 90%;
  border: ${props => (props.selected ? "6px orange solid" : "6px grey solid")};
  border-radius: 80px;

  &:hover {
    border: ${props => {
      if (props.noHover) {
        return "6px grey solid";
      } else if (props.selected) {
        return "6px orange solid";
      } else {
        //here can check if length of selected people is 3, if so then keep hover to same color
        return "6px white solid";
      }
    }}

  @media screen and (max-width: 540px) {
  }
`;

export default Avatar;
