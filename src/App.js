import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from "./pages/login/Login";
import DashboardRoute from "./route/dashboard/Dashboard";
import KaryawanRoute from "./route/karyawan/Karyawan";
import KeuanganRoute from "./route/keuangan/Keuangan";
import MenuRoute from "./route/menu/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashboardRoute/>}/>
        <Route path='/data-akun' element={<KaryawanRoute/>}/>
        <Route path='/data-keuangan' element={<KeuanganRoute/>}/>
        <Route path='/data-menu' element={<MenuRoute/>}/>
        {/* Route untuk halaman 404 */}
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
