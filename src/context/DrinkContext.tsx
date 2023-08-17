import { createContext, useState } from "react";
import { IChildren, IDrink } from "../utils/interface";

interface IDrinkContext {
  drinkData: IDrink[];
  getDrinks: () => void;
}

export const DrinkContext = createContext({} as IDrinkContext);

export function DrinkProvider({ children }: IChildren) {
  const [drinkData, setDrinkData] = useState<IDrink[] | []>([]);

  async function getDrinks() {
    try {
      const response = await fetch("../../db.json");

      if (response.ok) {
        const data = await response.json();
        setDrinkData(data.drinks);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DrinkContext.Provider value={{ drinkData, getDrinks }}>
      {children}
    </DrinkContext.Provider>
  );
}
