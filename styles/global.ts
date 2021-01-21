import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #e1e1e1;
  }

  
  body {
    background: rgb(18,18,18);
    background: linear-gradient(145deg, rgba(18,18,18,1) 3%, rgba(41,32,65,1) 100%);
    font-family: "Cutive Mono";
    /* min-width: auto; */
    margin: 0 auto;
    /* padding: 0; */
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  @media (max-width: 1100px) {
    body {
      width: 100%;
    }
    html {
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    overflow: auto;
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
