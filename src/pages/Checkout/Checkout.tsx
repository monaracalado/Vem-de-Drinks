import { Button, IconButton, TextField } from "@mui/material";
import { Header } from "../../components/Header/Header";
import {
  ActionsContainer,
  CheckoutButtonContainer,
  CheckoutPageContainer,
  DrinkTitle,
  DrinkValue,
  ConfirmButton,
  FormContainer,
  SelectedDrink,
  SelectedDrinkContainer,
  TotalContainer,
} from "./styles";
import { Add, DeleteOutlineOutlined, Remove } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    totalPrice,
    totalItensPrice,
    deliveryPrice,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
    removeDrinkInCart,
  } = useContext(CartContext);

  return (
    <>
      <Header />
      <CheckoutPageContainer>
        <FormContainer>
          <h2>Complete seu pedido</h2>

          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço para receber seu drink</p>
            <form>
              <TextField
                label="CEP"
                placeholder="CEP"
                required
                sx={{ width: "40%" }}
              />
              <TextField
                label="Rua"
                placeholder="Rua"
                required
                sx={{ width: "100%" }}
              />
              <TextField
                label="Número"
                placeholder="Número"
                required
                sx={{ width: "40%" }}
              />
              <TextField
                label="Complemento"
                placeholder="Complemento"
                sx={{ width: "calc(60% - 0.75rem)" }}
              />
              <TextField
                label="Bairro"
                placeholder="Bairro"
                required
                sx={{ width: "calc(44% - 0.75rem)" }}
              />
              <TextField
                label="Cidade"
                placeholder="Cidade"
                required
                sx={{ width: "calc(44% - 0.75rem)" }}
              />
              <TextField
                label="UF"
                placeholder="UF"
                required
                sx={{ width: "12%" }}
              />
            </form>
          </div>
        </FormContainer>

        <div>
          <h2>Drinks selecionados</h2>
          <SelectedDrinkContainer>
            {cart.length > 0 ? (
              cart.map((drink) => (
                <SelectedDrink key={drink.id}>
                  <img src={`/${drink.img}.png`} />
                  <div>
                    <DrinkTitle>{drink.name}</DrinkTitle>
                    <ActionsContainer>
                      <CheckoutButtonContainer>
                        <IconButton onClick={() => decrementCartItemQuantity(drink.id)} title="Diminuir quantidade">
                          <Remove />
                        </IconButton>
                        <span>{drink.quantity}</span>
                        <IconButton onClick={() => incrementCartItemQuantity(drink.id)} title="Aumentar quantidade">
                          <Add />
                        </IconButton>
                      </CheckoutButtonContainer>
                      <CheckoutButtonContainer>
                        <Button
                          startIcon={<DeleteOutlineOutlined />}
                          sx={{ color: "#000" }}
                          onClick={() => removeDrinkInCart(drink.id)}
                        >
                          Remover
                        </Button>
                      </CheckoutButtonContainer>
                    </ActionsContainer>
                  </div>
                  <DrinkValue>
                    {`R$ ${drink.value
                      .toFixed(2)
                      .replace(".", ",")
                      .padEnd(4, "0")}`}
                  </DrinkValue>
                </SelectedDrink>
              ))
            ) : (
              <h2>Nenhum drink adicionado no carrinho</h2>
            )}

            <TotalContainer>
              <span>
                <span>Total dos itens</span>
                <span>{`R$ ${totalItensPrice}`}</span>
              </span>
              <span>
                <span>Entrega</span>
                <span>{`R$ ${deliveryPrice
                  .toFixed(2)
                  .replace(".", ",")}`}</span>
              </span>
              <span>
                <strong>Total</strong>
                <strong>{`R$ ${totalPrice}`}</strong>
              </span>

              <ConfirmButton
                disabled={parseFloat(totalPrice) === 0 ? true : false}
                onClick={() => {
                  cart.forEach((item) => {
                    removeDrinkInCart(item.id);
                  });
                  navigate("/compra-finalizada");
                }}
              >
                Confirmar pedido!
              </ConfirmButton>
            </TotalContainer>
          </SelectedDrinkContainer>
        </div>
      </CheckoutPageContainer>
    </>
  );
}
