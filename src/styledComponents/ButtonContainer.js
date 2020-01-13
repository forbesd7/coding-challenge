import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 10px 10px;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    width: 50%;
  }
`;

export default ButtonContainer;
