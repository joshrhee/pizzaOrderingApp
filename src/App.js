import React from 'react';
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";

// Under line of the return(, <> </> should need it
function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Banner/>
      <Menu/>
    <div>Hello</div>
    </>
  );
}

export default App;
