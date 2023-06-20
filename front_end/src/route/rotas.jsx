// import { Routes, Route } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";
import WebCamCreate from "../pages/webcam/WcRead";
import HeadReadPage from "../pages/head/HeadRead.jsx";
import KeyBoardRead from "../pages/keyboard/KeyBoardRead";
import MouseRead from "../pages/mouse/MouseRead";
import Layout from "../layout/Grid/Layout";
const Rotas = () => (
  <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/webcam-create" element={<WebCamCreate />} />
      <Route path="/heads" element={<HeadReadPage />} />
      <Route path="/keyboard" element={<KeyBoardRead />} />
      <Route path="/mouses" element={<MouseRead />} />
    </Routes>
  </Layout>
);

export default Rotas;
