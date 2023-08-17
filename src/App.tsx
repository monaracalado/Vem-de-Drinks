import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { DrinkProvider } from "./context/DrinkContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <DrinkProvider>
          <Router />
          <GlobalStyle />
        </DrinkProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
