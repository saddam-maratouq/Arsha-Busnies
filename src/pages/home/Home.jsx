import React from "react";
import About from "./About/About";
import Clients from "./Clientss/Clients";
import Feathers from "./Featchers/Feathers";

// Sections
import Header from "./header/Header";
import Team from "./team/Team";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Feathers />
      <Clients />
      <Team />
    </>
  );
};

export default Home;
