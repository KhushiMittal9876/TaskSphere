import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backgrnd from "./components/Backgrnd";
import Foreground from "./components/Foreground";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative w-full h-screen bg-zinc-200 dark:bg-zinc-900">
      <ToastContainer bodyClassName="toastBody" theme="dark" autoClose={2000} />
      <button
        onClick={toggleTheme}
        className="px-[468px] py-5 text-black text-5xl dark:text-yellow-500 transition"
      >
        {theme === "light" ? <FaMoon /> : <MdLightMode />}
      </button>
      <Backgrnd />
      <Foreground />
    </div>
  );
}

export default App;
