import styled from "styled-components";

const Avatar = styled.img`
  height: 40%;
  width: 90%;
  border: ${props => (props.selected ? "7px orange solid" : "7px grey solid")};
  border-radius: 70px;

  &:hover {
    border: ${props => {
      if (props.selected) {
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
