import { useState } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        {/* main content and footer will go here */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
