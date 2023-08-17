import styled from "styled-components";

export const DrinkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  padding: 0 1.25rem 1.25rem;
  border-radius: 36px 36px 36px 36px;
  width: 100%;
  max-width: 300px;
  color: ${(props) => props.theme.text};

  text-align: center;

  background-color: ${(props) => props.theme.tertiary};

  img {
    margin-top: -1.5rem;
    width: 100%;
    max-width: 120px;
    border-radius: 50%;
  }

  & p {
    font-size: 1rem;
  }
`;

export const DrinkTagsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 0.75rem;

  & > span {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.white};
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-weight: 500;
  }
`;

export const DrinkValueContainer = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.text};

  & > strong {
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 140%;
  }
`;

export const CardInfoContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 0.5rem;
    flex: 1;
  }
`;

export const IncrementDecrementContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.baseBtn};
  border-radius: 4px;
  gap: 0.2rem;
`;
