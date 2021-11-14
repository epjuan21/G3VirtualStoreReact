import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../helpers/routes'

export const LoginPage = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-md-center mb-5">
                    <div className="col-md-auto col-lg-3">
                        <h1 className="text-center">Iniciar Sesión</h1>

                        <form>
                            <div className="col mb-3 ">
                                <label forhtml="inputUser" className="form-label">Usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputUser"
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
                                <button 
                                    className="btn btn-primary" 
                                    type="submit"
                                    >
                                        <span
                                            role="status"
                                            aria-hidden="true"
                                        >
                                        Iniciar Sesión
                                        </span>
                                </button>
                                <Link 
                                    className="btn btn-link" 
                                    to={routes.auth.register}
                                >
                                    Registrarse
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
