import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import routes from '../../helpers/routes'
import { Loading } from '../ui/Loading'
import { ErrorMessage } from '../ui/ErrorMessage'
import { login } from '../../actions/userActions'

export const LoginPage = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history,userInfo])

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-sm-center mb-5">
                    <div className="col-sm-6 col-sm-5 col-md-5 col-lg-5 col-xl-3">
                        <h1 className="text-center">Iniciar Sesión</h1>

                        { error && <ErrorMessage alertType="danger">{ error }</ErrorMessage> }

                        { loading && <Loading/> }

                        <form onSubmit={ handleLogin }>
                            <div className="col mb-3">
                                <label forhtml="inputUser" className="form-label">Correo</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="inputUser"
                                    onChange={ (e) => setEmail(e.target.value) }
                                    value={email}
                                />
                            </div>
                            <div className="col mb-3">
                                <label forhtml="inputPassword" className="form-label">Contraseña</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    onChange={ (e) => setPassword(e.target.value) }
                                    value={password}
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
