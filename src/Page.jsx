import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage on initial render
    const userPreference = localStorage.getItem("theme");
    if (userPreference === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Save the user's preference to local storage
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Login darkMode={darkMode} />

      <div
        className="flex justify-center items-center text-7xl"
        style={{ fontSize: "3rem" }}
      >
        {darkMode ? (
          <FaToggleOn onClick={toggleDarkMode} className="cursor-pointer" />
        ) : (
          <FaToggleOff onClick={toggleDarkMode} className="cursor-pointer" />
        )}
      </div>
    </div>
  );
}

export default Page;
