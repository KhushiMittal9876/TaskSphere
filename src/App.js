import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backgrnd from "./components/Backgrnd";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <ToastContainer
        bodyClassName="toastBody"
        theme="dark"
        autoClose={2000}
      />
      <Backgrnd />
      <Foreground />
    </div>
  );
}

export default App;
