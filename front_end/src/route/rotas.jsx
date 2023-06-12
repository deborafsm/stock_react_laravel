// import { Routes, Route } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";
import WebCamCreate from "../pages/webcam/create";
import HeadReadPage from "../pages/head/HeadReadPage.jsx"
import Layout from "../layout/Grid/Layout";
const Rotas = () => (
  <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/webcam-create" element={<WebCamCreate />} />
      <Route path="/heads" element={<HeadReadPage />} />
    </Routes>
  </Layout>
);

export default Rotas;
