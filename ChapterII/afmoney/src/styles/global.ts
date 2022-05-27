import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #F0F2F5;
  --red: #E62E4D;
  --green:#33CC95;
  --blue: #5429CC;
  --blue-light: #6933ff;
  --text-title: #363F5F;
  --text-body: #969cb2;
  --shape: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// tamanho padrão para desktop 16px;
html {
  @media (max-width: 1080px){
    font-size: 93.75%;  //15px
  }

  @media (max-width: 720){
    font-size: 87.5%;  //14px
  }
}

// REM - 1rem = font-size da página = 16px

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;

}


`



// const Title = styled.h1`
//   font-size: 64px;
//   color: #8257e6;
// `