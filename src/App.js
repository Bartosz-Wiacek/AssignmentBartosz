import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./Pages/Restaurant";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      {/* Create a HashRouter for the app */}
      <HashRouter>
        <Routes>
          {/* Define the Route for the Home component, set as the index */}
          <Route index element={<Home />} />
          {/* Define the Route for the Restaurant component */}
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
