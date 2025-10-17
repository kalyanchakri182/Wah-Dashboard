/*import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App; */

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <div className="app">
          {/* 👇 Pass down the function */}
          <Sidebar onLogout={() => setIsLoggedIn(false)} />
          <Dashboard />
        </div>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;




