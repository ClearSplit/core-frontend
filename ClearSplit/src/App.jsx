import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/warehouses/:warehouseId" element={<WarehouseDetailsPage />}/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;