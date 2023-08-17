import { Header } from "../../components/Header/Header";
import { DefaultPageLayoutContainer } from "../styles";
import { CompraFinalizadaContainer } from "./styles";


export function CompraFinalizada() {
  return (
    <>
      <Header />
      <DefaultPageLayoutContainer>
        <CompraFinalizadaContainer>
          <img src="drinks.gif" alt="" />
          <h1>Obrigada por comprar com a gente!</h1>
          <h2>Seu drink esta sendo preparado com carinho.</h2>
          <div>
            <p>Cliente: Ana Banana</p>
            <p>CPF: 12345678912</p>
            <p>Nº do pedido: #0000000</p>
          </div>
        </CompraFinalizadaContainer>
      </DefaultPageLayoutContainer>
    </>
  );
}
