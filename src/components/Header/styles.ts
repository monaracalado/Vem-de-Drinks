import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.tertiary};
  padding: 0 10rem;
  z-index: 9;

  & > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
