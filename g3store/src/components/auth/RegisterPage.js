import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { register } from '../../actions/userActions';
import routes from '../../helpers/routes';
import { ErrorMessage } from '../ui/ErrorMessage';
import { Loading } from '../ui/Loading';

export const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState(
        "https://res.cloudinary.com/jfrvdata/image/upload/v1637429204/Users/defaultUser.png"
      );
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo} = userRegister;

    const history = useHistory()

    useEffect(() => {
        if (userInfo) {
            history.push(routes.home)
        }
    }, [history,userInfo])

    const handleRegister = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            setMessage('Las contraseñas no coinciden')
        } else {
            dispatch(register(name, pic, email, password))
        }
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
                                    onChange={(e) => setName(e.target.value)}
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
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
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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
