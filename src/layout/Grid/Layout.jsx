import React from "react";
import Grid from "./stytleGrid.jsx";
import Header from "../Header/Header.jsx";
import Aside from "../Aside/NewAside.jsx";
import Container from "../Container/Container.jsx";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
  return (
    <Grid>
      <Header />
      <Aside />
      <Container>{children}</Container>
    </Grid>
  );
};
export default Layout;
