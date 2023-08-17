import { Header } from "../../components/Header/Header";
import { DrinkSection, DrinksContainer } from "./styles";
import { DrinkCard } from "../../components/drinkCard/DrinkCard";
import { DefaultPageLayoutContainer } from "../styles";
import { useContext, useEffect } from "react";
import { DrinkContext } from "../../context/DrinkContext";

export function Drinks() {
  const { getDrinks, drinkData } = useContext(DrinkContext);

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <>
      <Header />
      <DefaultPageLayoutContainer>
        <DrinkSection>
          <h2>Nossos melhores drinks</h2>
          <DrinksContainer>
            {drinkData.length > 0 ? (
              drinkData.map((drink) => (
                <DrinkCard key={drink.id} drinkData={drink} />
              ))
            ) : (
              <h2>Nenhum drink encontrado</h2>
            )}
          </DrinksContainer>
        </DrinkSection>
      </DefaultPageLayoutContainer>
    </>
  );
}
