import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'

export const Navbar = () => {
    return (
        <>
            <header>
                <div className="bg-primary">
                    <div className="container">
                        <nav className="navbar justify-content-end mx-2 py-3">
                            <div className="d-flex">
                                <Link className="btn btn-sm btn-primary" to="/auth/login">
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    className="btn btn-sm btn-outline-light ms-2"
                                    to="/auth/register"
                                >
                                    Registrarse
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    <nav className="navbar">
                        <Link
                            className="navbar-brand text-white"
                            to="/">
                            <img
                                src={logo}
                                alt="G3 Logo"
                                height="100"
                                className="d-inline-block align-text-top mx-2"
                            />
                        </Link>

                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink
                                    activeclassname="active"
                                    className="nav-link" to="/"
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeclassname="active"
                                    className="nav-link"
                                    to="/equipo"
                                >
                                    Quienes somos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeclassname="active"
                                    className="nav-link"
                                    to="/contacto"
                                >
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )
}
