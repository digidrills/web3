// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Web3ReactProvider } from '@web3-react/core'
// import { Web3Provider } from "@ethersproject/providers";

// function getLibrary(provider) {
//   return new Web3Provider(provider);
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     {/* <App /> */}
// //   </React.StrictMode>
// // );
// ReactDOM.render(
//   <Web3ReactProvider getLibrary={getLibrary}>
//     <App />
//   </Web3ReactProvider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import {AuthProvider} from './context/AuthProvider'

import App from "./App";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Web3ReactProvider>
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
