import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
