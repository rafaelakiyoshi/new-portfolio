import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #121212;
    font-family: "Cutive Mono";
    min-width: auto;
    margin: 0 auto;
    /* padding: 0; */
    width: 60%;
    height: 100%;
    overflow-x: hidden;
  }

  @media (max-width: 1300px) {
    body {
      width: 85%;
    }
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px grey;
    border-radius: 0px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ce822b;
    border-radius: 0px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`
