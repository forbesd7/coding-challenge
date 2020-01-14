import styled from "styled-components";

const SinglePlayerContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 3rem 1rem;
  width: 150px;
  height: 350px;
  text-align: left;
  @media screen and (max-width: 540px) {
    padding: 0.5rem 1.5rem 1rem;
  }
`;

export default SinglePlayerContainer;
