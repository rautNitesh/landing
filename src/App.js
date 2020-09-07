import React from "react";

import styled from "styled-components";

import "./App.css";
import How from "./components/How/How";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";

const Wrapper = styled.section`
  background: #f1f0f7;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <Hero />
      <How />
    </>
  );
}

export default App;
