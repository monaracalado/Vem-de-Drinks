import { Badge, IconButton } from "@mui/material";
import { ShoppingCart, LocalBar, Liquor  } from "@mui/icons-material";
import { HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
  const navigate = useNavigate();
  const { totalItensInCart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <div>
      <IconButton onClick={() => navigate("/")}>
        <LocalBar 
          aria-label="Vem de drinks"
          titleAccess="Vem de Drinks ícone"
          color="secondary"
          sx={{ fontSize: "48px", cursor: "pointer" }}
        />
      </IconButton>
      <span style={{fontWeight:'bold'}}>Vem de Drinks</span>
      </div>
      <div>
        <span>Recife, PE</span>
        <IconButton aria-label="drinks" color="secondary" onClick={() => navigate("/drinks")}>
            <Liquor titleAccess="Drinks ícone" />
        </IconButton>
        <IconButton aria-label="carrinho" color="secondary" onClick={() => navigate("/checkout")}>
          <Badge badgeContent={totalItensInCart} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </HeaderContainer>
  );
}
