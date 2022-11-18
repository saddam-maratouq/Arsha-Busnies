import { useState } from "react";
import "./App.css";
import Navbar from "./layout/Nav-bar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./layout/Nav-bar/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
