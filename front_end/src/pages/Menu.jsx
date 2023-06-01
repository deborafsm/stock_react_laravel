import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import WebCamCreate from "./webcam/create";

const Menu = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/info">Informações</Link>
            </li>
            <li>
              <Link to="/webcam-create">Webcam</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" component={Home} element={Home} />
        <Route path="/info" component={Info} element={Info} />
        <Route path="/webcam-create" component={WebCamCreate} element={WebCamCreate} />
      </Routes>
    </Router>
  );
};

export default Menu;
