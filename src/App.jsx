import AppRoutes from "./route/rotas.jsx";
import GlobalStyle from "./style/globalStyle.jsx";
import NewAside from "./layout/Aside/NewAside.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NewAside /> */}
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
