import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';


import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import NavBar from './Navbar';
import Sidebar from "./Sidebar";
import Footer from "./Footer";


import Rotas from "../../routes/Rotas.js";
import routes from "../../routes/Rotas.js";
const MasterLayout = ({ children }) => {
    return (
        <div className="sb-nav-fixed">
            <NavBar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav" >
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        {children}
                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default MasterLayout;