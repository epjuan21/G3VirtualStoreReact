import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'
import routes from '../../helpers/routes'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

export const Navbar = () => {

    const history = useHistory();

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
        history.push(routes.home)
    }

    return (
        <>
            <header>
                <div className="bg-primary">
                    <div className="container">
                        <nav className="navbar navbar-dark bg-primary navbar-expand-lg justify-content-end mx-2 py-3">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

                                {
                                    !userInfo && 
                                    (
                                        <li className="nav-item">
                                            <NavLink className="btn btn-sm btn-primary" to={routes.auth.login}>Iniciar Sesión</NavLink>
                                            <NavLink className="btn btn-sm btn-outline-light ms-2" to={routes.auth.register}>Registrarse</NavLink>
                                        </li>
                                    )
                                }

                                {
                                    userInfo && 
                                    (
                                        <div className="dropdown text-end ms-2">
                                            <a href="/#" className="d-block link-dark text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={userInfo.image} alt="mdo" width="32" height="32" className="rounded-circle" />
                                            </a>
                                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                                <li><h6 className="dropdown-header">{userInfo.name}</h6></li>
                                                <li><NavLink className="dropdown-item" to={routes.product.list}>Productos</NavLink></li>
                                                <li><NavLink className="dropdown-item" to={routes.product.create}>Crear Producto</NavLink></li>
                                                <li><a className="dropdown-item" href="/#">Profile</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><button className="dropdown-item" onClick={logoutHandler}>Cerrar Sesión</button></li>
                                            </ul>
                                        </div>
                                    )
                                }

                            </ul>

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

                        </div>

                    </nav>
                </div>

            </header>
        </>
    )
}
