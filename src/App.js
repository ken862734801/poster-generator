import "./App.css";

import React, {useEffect, useState } from "react";
import Header from "./components/header";
import Container from "./components/container";
import Mobile from "./components/mobile";




const App = () => {
  return (
    <div className="App">
      <Header/>
       <Container/>
      <Mobile/>
    </div>
  );
}

export default App;
