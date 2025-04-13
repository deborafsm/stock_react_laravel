import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from "../layouts/admin/MasterLayout.jsx";
import Dashboard from "../components/admin/Dashboard.jsx";
import Profile from "../components/admin/Profile.jsx";
export default function routes() {
  return (
    <div>
      <MasterLayout>
        <Router>
          <Routes>
            <Route path='/admin' element={<MasterLayout />} />
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/profile' element={<Profile />} />
          </Routes>
        </Router>
      </MasterLayout>
    </div>
  )
}
