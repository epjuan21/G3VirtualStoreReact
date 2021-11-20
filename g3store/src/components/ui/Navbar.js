import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'
import routes from '../../helpers/routes'
import { useHistory } from 'react-router'

export const Navbar = () => {

    const history = useHistory();

    return (
        <>
            <header>
                <div className="bg-primary">
                    <div className="container">
                        <nav className="navbar justify-content-end mx-2 py-3">
                            <div className="d-flex">
                                <NavLink className="btn btn-sm btn-primary" to={routes.auth.login}>
                                    Iniciar Sesión
                                </NavLink>
                                <NavLink
                                    className="btn btn-sm btn-outline-light ms-2"
                                    to={routes.auth.register}
                                >
                                    Registrarse
                                </NavLink>
                                <button
                                    className="btn btn-sm btn-outline-light ms-2"
                                    onClick={() => { 
                                        localStorage.removeItem('userInfo');
                                        history.push(routes.home)
                                        }}
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <NavLink
                            className="navbar-brand text-white"
                            to={routes.home}>
                            <img
                                src={logo}
                                alt="G3 Logo"
                                height="100"
                                className="d-inline-block align-text-top mx-2"
                            />
                        </NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link" to={routes.home}
                                    >
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/equipo"
                                    >
                                        Quienes somos
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/contacto"
                                    >
                                        Contacto
                                    </NavLink>
                                </li>
                            </ul>

                            <ul className="navbar-nav">

                                <li className="nav-item dropdown">

                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li>
                                            <NavLink className="dropdown-item" to={routes.users}>
                                                Usuarios
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to={routes.account}>
                                                Cuenta
                                            </NavLink>
                                        </li>
                                    </ul>

                                </li>


                            </ul>

                        </div>

                    </nav>
                </div>

            </header>
        </>
    )
}
