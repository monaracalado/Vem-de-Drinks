import styled from "styled-components";

export const CompraFinalizadaContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius:44px;
  background-color: ${(props) => props.theme.baseCard};
  margin-top: 2rem;
& > img {
  width: 100%;
  max-width: 500px;
  border-radius: 44px;
}
`;  