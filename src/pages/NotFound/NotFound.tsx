import { Header } from "../../components/Header/Header";
import { DefaultPageLayoutContainer } from "../styles";
import {NotFoundSection} from './styles'

export function NotFound() {
  return (
    <>
      <Header />
      <DefaultPageLayoutContainer>
        <NotFoundSection>
        <p>Error 404: Página não encontrada</p>
        </NotFoundSection>
      </DefaultPageLayoutContainer>
    </>
  );
}
