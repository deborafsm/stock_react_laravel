import AppRoutes from "./route/rotas.jsx";
import GlobalStyle from "./style/globalStyle.jsx";
import NewAside from "./layout/Aside/NewAside.jsx";
import { BrowserRouter } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import Profile from "./components/admin/Profile.jsx";
import Rotas from "./routes/Rotas.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;


function App() {
  return (
    <>

      <BrowserRouter>
        {/* <NewAside /> */}
        {/* <GlobalStyle /> */}
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
