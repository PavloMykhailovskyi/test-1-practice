import { Card } from "./Card/Card";
import { createGlobalStyle } from "styled-components";
import modernNormalize from 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Card />
    </>
  );
};
