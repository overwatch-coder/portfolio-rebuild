import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioPage from './Index';

const UserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
      </Routes>
    </Router>
  )
}

export default UserRoutes
