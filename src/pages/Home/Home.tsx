import { Header } from "../../components/Header/Header";
import bigHeroimg from "/bigHero.png";
import { useNavigate } from "react-router-dom";
import { BigHeroSection, CustomButton } from "./styles";
import { DefaultPageLayoutContainer } from "../styles";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <DefaultPageLayoutContainer>
        <BigHeroSection>
          <div>
            <h1>Os melhores Drinks e Coquiteis!</h1>
            <p>
              Nossos drinks são equilibrado, mas com a dose certa de intesidade
              para te acompnhar naquele momento de diversão! Ta esperando o que
              para provar?
            </p>
            <CustomButton onClick={() => navigate("/drinks")}>
              Confira!
            </CustomButton>
          </div>
          <div>
            <img
              src={bigHeroimg}
              alt="cinco drinks variados e coloridos com um fundo escuro"
            />
          </div>
        </BigHeroSection>
      </DefaultPageLayoutContainer>
    </>
  );
}
