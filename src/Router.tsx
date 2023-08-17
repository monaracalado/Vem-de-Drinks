import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Checkout } from "./pages/Checkout/Checkout";
import { NotFound } from "./pages/NotFound/NotFound";
import { Drinks } from "./pages/Drinks/Drinks";
import { CompraFinalizada } from "./pages/CompraFinalizada/CompraFinalizada";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compra-finalizada" element={<CompraFinalizada />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
