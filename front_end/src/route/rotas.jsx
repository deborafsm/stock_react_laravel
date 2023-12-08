// import { Routes, Route } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";
import KitRead from "../pages/kit/kitRead.jsx";
import KitCreate from "../pages/kit/KitCreate.jsx";
import WebCamCreate from "../pages/webcam/WcCreate";
import WebCam from "../pages/webcam/WcRead"
import HeadReadPage from "../pages/head/HeadRead.jsx";
import KeyBoardRead from "../pages/keyboard/KeyBoardRead";
import KeyBoardCreate from "../pages/keyboard/KeyBoardCreate";
import MouseRead from "../pages/mouse/MouseRead";
import MouseCreate from "../pages/mouse/MouseCreate";
import MonitorRead from "../pages/monitors/MonitorRead";
import MonitorCreate from "../pages/monitors/MonitorCreate";
import PcReader from "../pages/computers/PcReader";
import PcCreate from "../pages/computers/PcCreate";
import OperatorsReader from "../pages/operators/OperatorsRead";
import HeadCreate from "../pages/head/HeadCreate";
import HeadEdit from "../pages/head/HeadEdit.jsx";
import Layout from "../layout/Grid/Layout";


const Rotas = () => (
  <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/kit-read" element={<KitRead />} />
      <Route path="/kit-create" element={<KitCreate />} />
      <Route path="/webcam-create" element={<WebCamCreate />} />
      <Route path="/webcam" element={<WebCam />} />
      <Route path="/heads" element={<HeadReadPage />} />
      <Route path="/head-create" element={<HeadCreate />} />
      <Route path="/keyboard" element={<KeyBoardRead />} />
      <Route path="/keyboard-create" element={<KeyBoardCreate />} />
      <Route path="/mouses" element={<MouseRead />} />
      <Route path="/mouse-create" element={<MouseCreate />} />
      <Route path="/monitor" element={<MonitorRead />} />
      <Route path="/monitor-create" element={<MonitorCreate />} />
      <Route path="/pc" element={<PcReader />} />
      <Route path="/pc-create" element={<PcCreate />} />
      <Route path="/operators" element={<OperatorsReader />} />
      <Route path="/editar_head/:id" element={<HeadEdit />} />
    </Routes>

  </Layout>
);

export default Rotas;
