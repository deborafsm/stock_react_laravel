// import { Routes, Route } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";
import KitRead from "../pages/kit/kitRead.jsx";
import KitCreate from "../pages/kit/KitCreate.jsx";
import KitUpdate from "../pages/kit/KitUpdate.jsx";
import WebCamCreate from "../pages/webcam/WcCreate";
import WebCam from "../pages/webcam/WcRead"
import WebCamUpdate from "../pages/webcam/WcUpdate"
import HeadReadPage from "../pages/head/HeadRead.jsx";
import KeyBoardRead from "../pages/keyboard/KeyBoardRead";
import KeyBoardCreate from "../pages/keyboard/KeyBoardCreate";
import KeyBoardUpdate from "../pages/keyboard/KeyBoardUpdate";
import MouseRead from "../pages/mouse/MouseRead";
import MouseCreate from "../pages/mouse/MouseCreate";
import MouseUpdate from "../pages/mouse/MouseUpdate";
import MonitorRead from "../pages/monitors/MonitorRead";
import MonitorCreate from "../pages/monitors/MonitorCreate";
import MonitorUpdate from "../pages/monitors/MonitorUpdate";
import PcReader from "../pages/computers/PcReader";
import PcCreate from "../pages/computers/PcCreate";
import PcUpdate from "../pages/computers/PcUpdate";
import OperatorsReader from "../pages/operators/OperatorsRead";
import HeadCreate from "../pages/head/HeadCreate";
import HeadEdit from "../pages/head/HeadEdit.jsx";
import Layout from "../layout/Grid/Layout";
import MasterLayout from "../layouts/admin/MasterLayout.jsx";
import Login from "../pages/login/login.jsx";
import Register from "../pages/login/register.jsx";
const Rotas = () => (
  <MasterLayout>
    {/* outro layout */}
    {/* <Layout> */}
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/kit-read" element={<KitRead />} />
      <Route path="/kit-create" element={<KitCreate />} />
      <Route path="/kit-update/:id" element={<KitUpdate />} />
      <Route path="/webcam-create" element={<WebCamCreate />} />
      <Route path="/webcam" element={<WebCam />} />
      <Route path="/webcam-update/:id" element={<WebCamUpdate />} />
      <Route path="/heads" element={<HeadReadPage />} />
      <Route path="/head-create" element={<HeadCreate />} />
      <Route path="/head-update/:id" element={<HeadEdit />} />
      <Route path="/keyboard" element={<KeyBoardRead />} />
      <Route path="/keyboard-create" element={<KeyBoardCreate />} />
      <Route path="/keyboard-update/:id" element={<KeyBoardUpdate />} />
      <Route path="/mouses" element={<MouseRead />} />
      <Route path="/mouse-create" element={<MouseCreate />} />
      <Route path="/mouse-update/:id" element={<MouseUpdate />} />
      <Route path="/monitor" element={<MonitorRead />} />
      <Route path="/monitor-create" element={<MonitorCreate />} /> 
      <Route path="/monitor-update" element={<MonitorUpdate />} /> 
      <Route path="/pc" element={<PcReader />} />
      <Route path="/pc-create" element={<PcCreate />} /> 
      <Route path="/pc-update" element={<PcUpdate />} /> 
      <Route path="/operators" element={<OperatorsReader />} />
    </Routes>
    {/* </Layout> */}
  </MasterLayout>
);

export default Rotas;
