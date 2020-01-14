import styled from "styled-components";

const Avatar = styled.img`
  height: 40%;
  width: 90%;
  border: 7px grey solid;
  border-radius: 70px;

  &:hover {
    border: 7px white solid;
  }

  @media screen and (max-width: 540px) {
  }
`;

export default Avatar;
