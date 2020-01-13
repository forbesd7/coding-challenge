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
    cursor: pointer;
  }
`;

export default Button;
