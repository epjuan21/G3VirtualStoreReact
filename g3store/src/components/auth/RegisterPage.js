import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage } from '../ui/ErrorMessage';
import { Loading } from '../ui/Loading';

export const RegisterPage = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        image: '',
        password: '',
        confirmPassword: ''
    })
    const { name, email, image, password, confirmPassword } = state;

    const [pic, setPic] = useState(
        "https://res.cloudinary.com/jfrvdata/image/upload/v1637429204/Users/defaultUser.png"
      );

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [picMessage, setPicMessage] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {

            setMessage("Las contraseñas no coinciden")

        } else {
            
            setMessage(null)

            try {
                const config = {
                    baseURL: 'http://localhost:3000/api/v1',
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                setLoading(true)

                const { data } = await axios.post('/auth/register', {
                    name, email, image: pic, password
                }, config)

                setLoading(false)
                setError(false)
                setMessage(false)

                localStorage.setItem('userInfo', JSON.stringify(data))

            } catch (error) {
                setError(error.response.data.message)
                setLoading(false)
            }
        }
    }

    const handleInputChange = ({ target }) => {

        setState({
            ...state,
            [target.name]: target.value
        })
    }

    const postDetails = (pic) => {

        const image = pic;

        if (image === undefined ) {
            return setPicMessage('Por favor seleccione una Imagen')
        }
        setPicMessage(null)

        if(image.type === 'image/jpeg' || image.type === 'image/png') {
            const data = new FormData();
            data.append('file', image)
            data.append('upload_preset', 'g3store')
            data.append('cloud_name', 'jfrvdata ')
            fetch('https://api.cloudinary.com/v1_1/jfrvdata/upload', {
                method: 'post',
                body: data,
            }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPic(data.url.toString());
            }).catch((err) => {
                console.log(err)
            })
        } else {
            return setPicMessage('Por favor seleccione una Imagen') 
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-sm-center mb-5">
                    <div className="col-sm-6 col-sm-5 col-md-5 col-lg-5 col-xl-3">
                        <h1 className="text-center">Registrar Usuario</h1>

                        {error && <ErrorMessage alertType="danger">{error}</ErrorMessage>}
                        {message && <ErrorMessage alertType="danger">{message}</ErrorMessage>}

                        {loading && <Loading />}

                        <form onSubmit={handleRegister}>
                            <div className="col mb-3">
                                <label forhtml="inputUser" className="form-label">Usuario</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    id="inputUser"
                                    onChange={handleInputChange}
                                    value={name}
                                />
                            </div>
                            <div className="col mb-3">
                                <label forhtml="inputEmail" className="form-label">Correo</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
                                    value={password}
                                />
                            </div>
                            <div className="col mb-3">
                                <label forhtml="inputPasswordConfirm" className="form-label">Confirmar Contraseña</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    className="form-control"
                                    id="inputPasswordConfirm"
                                    onChange={handleInputChange}
                                    value={confirmPassword}
                                />
                            </div>

                            {
                                picMessage && ( <ErrorMessage alertType="danger" >{picMessage}</ErrorMessage> )
                            }

                            <div className="mb-3">
                                <label forhtml="formFile" className="form-label">Seleccione una imagen de perfil</label>
                                <input
                                    name="image"
                                    className="form-control" 
                                    type="file" 
                                    id="formFile" 
                                    onChange={ (e) => postDetails(e.target.files[0]) }
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
