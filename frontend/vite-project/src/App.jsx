import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Protected from "./components/Protected.jsx";
import CustomerList from "./components/CustomerList.jsx";
import SalesForm from "./components/SalesForm.jsx";
import SalesList from "./components/SalesList.jsx";
import SalesReport from "./components/SalesReport.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/sales" element={<SalesForm />} />
      <Route path="/sales-customers" element={<SalesList />} />
      <Route path="/sales/report" element={<SalesReport />} />
    </Routes>
  </Router>
);

export default App;