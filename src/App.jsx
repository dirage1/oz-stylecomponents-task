import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components"
import { flexMixin } from "./components/styled";
import { createGlobalStyle } from "styled-components";

const SectionStyled = styled.section`
  ${flexMixin({
    justify: 'center', 
    align: 'center', 
    wrap: 'wrap' , 
    gap: '20px'})};
  padding: 20px 40px;
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }

  body {
    background-color: #121212;
  }
`

function App() {
  return (
    <main>
      <GlobalStyle/>
      <Header />
      <SectionStyled>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </SectionStyled>
    </main>
  );
}

export default App;
