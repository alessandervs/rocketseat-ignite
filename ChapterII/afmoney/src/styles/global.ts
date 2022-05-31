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
  --input-background: #e7e9ee;
  --input-border: #d7d7d7;
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

.react-modal-overlay{
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;

}
.button-modal-close {
    border: 0;
    background: transparent;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    transition: filter 0.2s;


    &:hover {
      filter: brightness(0.8)
    }
  }

`



// const Title = styled.h1`
//   font-size: 64px;
//   color: #8257e6;
// `