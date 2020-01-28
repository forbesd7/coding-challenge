import styled from "styled-components";

const PlayerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: auto;
`;

export default PlayerContainer;
