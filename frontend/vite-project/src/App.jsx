import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Protected from "./components/Protected.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;