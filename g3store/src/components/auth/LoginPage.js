import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import routes from '../../helpers/routes'
import axios from 'axios'
import { Loading } from '../ui/Loading'
import { ErrorMessage } from '../ui/ErrorMessage'

export const LoginPage = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const { email, password } = state;

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const config = {
                baseURL: 'http://localhost:3000/api/v1',
                headers: {
                    "Content-type": "application/json"
                }
            }

            setLoading(true)

            const { data } = await axios.post('/auth/login', {
                email, password
            }, config)

            localStorage.setItem('userInfo', JSON.stringify(data))

            setLoading(false)

        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }
    }

    const handleInputChange = ({ target }) => {

        setState({
            ...state,
            [target.name]: target.value
        })
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
                                    onChange={ handleInputChange }
                                    value={state.email}
                                />
                            </div>
                            <div className="col mb-3">
                                <label forhtml="inputPassword" className="form-label">Contraseña</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    onChange={ handleInputChange }
                                    value={state.password}
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
