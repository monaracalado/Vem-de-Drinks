import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import {
  CardInfoContainer,
  DrinkCardContainer,
  DrinkTagsContainer,
  DrinkValueContainer,
  IncrementDecrementContainer,
} from "./styles";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";

import { IDrink } from "../../utils/interface";
import { CartContext } from "../../context/CartContext";

interface DrinkCardProps {
  drinkData: IDrink;
}

export function DrinkCard({ drinkData }: DrinkCardProps) {
  const [drinkQuantity, setDrinkQuantity] = useState(0);
  const { addDrinkInCart } = useContext(CartContext);

  function handleDrinkQuantity(isIncrement: boolean) {
    if (isIncrement) {
      setDrinkQuantity((state) => (state += 1));
    } else if (drinkQuantity > 0) {
      setDrinkQuantity((state) => (state -= 1));
    }
  }

  return (
    <DrinkCardContainer>
      <img src={`${drinkData.img}.png`} />

      <DrinkTagsContainer>
          <span>{drinkData.type}</span>
      </DrinkTagsContainer>

      <div>
        <strong>{drinkData.name}</strong>
        <p>{drinkData.description}</p>
      </div>

      <CardInfoContainer>
        <DrinkValueContainer>
          R$ <strong>{drinkData.value}</strong>
        </DrinkValueContainer>
        <div>
          <IncrementDecrementContainer>
            <IconButton
              title="Diminuir quantidade"
              onClick={() => handleDrinkQuantity(false)}
            >
              <Remove />
            </IconButton>
            <span>{drinkQuantity}</span>
            <IconButton
              title="Aumentar quantidade"
              onClick={() => handleDrinkQuantity(true)}
            >
              <Add />
            </IconButton>
          </IncrementDecrementContainer>
          <IconButton
            sx={{
              backgroundColor: "#9650b4",
              color: "#FFF",
              "&:hover": { backgroundColor: "#ae62bc" },
            }}
            title="Adicionar ao carrinho"
            onClick={() =>
              addDrinkInCart({ ...drinkData, quantity: drinkQuantity })
            }
            disabled={drinkQuantity === 0 ? true : false}
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </CardInfoContainer>
    </DrinkCardContainer>
  );
}
