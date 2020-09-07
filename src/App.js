import React from "react";

import styled from "styled-components";

import "./App.css";
import How from "./components/How/How";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
