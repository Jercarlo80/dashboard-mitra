import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from "./pages/login/Login";
import DashboardRoute from "./route/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/dashboard' element={<DashboardRoute/>}/>
        {/* Route untuk halaman 404 */}
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
