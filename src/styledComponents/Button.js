import styled from "styled-components";

const Button = styled.div`
  color: rgb(35, 41, 47);
  padding: 5px 20px;
  margin-left: 20px;
  font-size: 12px;
  border-radius: 5px;
  background-color: white;

  &:hover {
    background-color: rgb(255, 140, 0);
    color: white;
    cursor: pointer;
  }

  @media screen and (max-width: 540px) {
    margin: 7px 0;
  }
`;

export default Button;
