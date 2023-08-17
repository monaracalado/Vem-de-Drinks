import styled from "styled-components";
import { IncrementDecrementContainer } from "../../components/drinkCard/styles";

export const CheckoutPageContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  gap: 2rem;
  padding: 1rem 10rem 2rem;
`;

export const FormContainer = styled.div`
  & > div {
    background-color: ${(props) => props.theme.baseCard};
    padding: 1.5rem 2rem;
    border-radius: 4px;
    margin-top: 1rem;
  }

  & form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }
`;

export const SelectedDrinkContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius:44px;
  background-color: ${(props) => props.theme.baseCard};
  margin-top: 1rem;
`;

export const DrinkTitle = styled.span`
  font-weight: 500;
`;

export const DrinkValue = styled.span`
  font-weight: 700;
`;

export const SelectedDrink = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  border-bottom: ${(props) => `1px solid ${props.theme.baseBtn}`};

  & > img {
    width: 100%;
    max-width: 100px;
    border-radius: 50%;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

export const CheckoutButtonContainer = styled(IncrementDecrementContainer)`
  max-width: fit-content;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.5rem;

  & span {
    display: flex;
    justify-content: space-between;
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  border-radius: 4px;
  padding: 0.8rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
