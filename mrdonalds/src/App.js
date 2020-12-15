import React from 'react';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *,*::before,*::after{
    box-sizing: inherit; 
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
  }

  P {
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: 'Roboto';
    font-size: 16px;
    color: white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <NavBar/>
      </div>
    </>
  );
}

export default App;
