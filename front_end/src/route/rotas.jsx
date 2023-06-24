// import { Routes, Route } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";
import WebCamCreate from "../pages/webcam/WcRead";
import HeadReadPage from "../pages/head/HeadRead.jsx";
import KeyBoardRead from "../pages/keyboard/KeyBoardRead";
import MouseRead from "../pages/mouse/MouseRead";
import MonitorRead from "../pages/monitors/MonitorRead";
import PcReader from "../pages/computers/PcReader";
import OperatorsReader from "../pages/operators/OperatorsRead";
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
      <Route path="/monitor" element={<MonitorRead />} />
      <Route path="/pc" element={<PcReader />} />
      <Route path="/operators" element={<OperatorsReader />} />
    </Routes>
  </Layout>
);

export default Rotas;
