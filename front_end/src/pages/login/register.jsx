import React, { useState } from 'react'
import Navbar from "../../layouts/frontend/Navbar";
import axios from 'axios';
export default function Register() {

    const [registerInput, setRegister] = useState({
        nome: '',
        email: '',
        senha: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.presist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value })
    }

    const RegisterSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            senha: registerInput.senha,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if (res.data.status === 200) {

                } else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors })
                }
            });
        });
    }
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
                            <form onSubmit={RegisterSubmit} className="form-group mb-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="">Nome</label>
                                    <input type="text" name="nome" onChange={handleInput} value={registerInput.name} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">E-mail</label>
                                    <input type="text" name="email" onChange={handleInput} value={registerInput.name} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Senha</label>
                                    <input type="text" name="senha" onChange={handleInput} value={registerInput.name} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Confimar Senha</label>
                                    <input type="text" name="confima_senha" onChange={handleInput} value={registerInput.name} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <button type="" className="btn btn-primary">Registrar</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
            Register
            <button type="" className='btn btn-primary'> Checking </button>
        </div>
    )
}
