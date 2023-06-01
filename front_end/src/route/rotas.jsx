// import { Routes, Route } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";
import Layout from "../layout/Grid/Layout";
const Rotas = () => (
  <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  </Layout>
);

export default Rotas;
