import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-md-center mb-5">
                    <div className="col-md-auto col-xl-3">
                        <h1 className="text-center">Registrar Usuario</h1>

                        <form>
                            <div className="col mb-3">
                                <label forhtml="inputUser" className="form-label">Usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputUser"
                                />
                            </div>
                            <div className="col mb-3">
                                <label forhtml="inputEmail" className="form-label">Correo</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                />
                            </div>
                            <div className="col mb-3">
                                <label forhtml="inputPassword" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">
                                    <span
                                        role="status"
                                        aria-hidden="true"
                                    >Registrarse</span>
                                </button>
                                <Link
                                    className="btn btn-link"
                                    to="/auth/login"
                                >
                                    Iniciar Sesión
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
