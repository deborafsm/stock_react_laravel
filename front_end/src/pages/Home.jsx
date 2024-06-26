import React from "react";
import Navbar from "../layouts/frontend/Navbar";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row-justify-content-center">
          <div className="card">
            <div className="card-header">
              <h4>Register</h4>
            </div>
            <div className="card-body">
              <form action="" className="form-group mb-3">
                <div className="form-group mb-3">
                  <label htmlFor="">Nome</label>
                  <input type="text" name="nome" className="form-control" value="" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">E-mail</label>
                  <input type="text" name="email" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Senha</label>
                  <input type="text" name="senha" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Confimar Senha</label>
                  <input type="text" name="confima_senha" className="form-control" />
                </div>
                <div className="form-group mb-3">
                  <button type="" className="btn btn-primary">Registrar</button>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
