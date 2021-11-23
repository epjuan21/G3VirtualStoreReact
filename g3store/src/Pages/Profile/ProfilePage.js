import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { updateProfile } from '../../actions/userActions';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { Loading } from '../../components/ui/Loading';
import routes from '../../helpers/routes';

export const ProfilePage = ({match}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pic, setPic] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picMessage, setPicMessage] = useState(null);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdate = useSelector((state) => state.userUpdate)
    const { loading, error, success } = userUpdate;

    const history = useHistory();

    useEffect(() => {
        if(!userInfo){
            history.push(routes.home)
        } else {
            setName(userInfo.name)
            setEmail(userInfo.email)
            setPic(userInfo.image)
        }
    }, [history, userInfo])

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

    const submitHandler = (e) => {
        e.preventDefault()
        if(password === confirmPassword)
            dispatch(updateProfile(userInfo._id, name, email, password, pic))
    }

    return (
        <>
            <div className="d-flex justify-content-center my-5">

                { loading && <Loading />}
                { success && ( <ErrorMessage alertType="success">Usuario Actualizado Correctamente</ErrorMessage>)}
                { error && <ErrorMessage alertType="danger" >{error}</ErrorMessage>}


            </div>
            <div className="container d-flex justify-content-center">
                <form onSubmit={submitHandler} autoComplete="off">
                    <div className="card text-center" style={{ width: 600 }}>
                        <img src={pic} style={{ width: 150 }} className="card-img-top d-flex align-self-center mt-3" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">
                        <input 
                            type="text" 
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </h5>
                        <p className="card-text text-muted">
                        <input 
                            type="email" 
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'
                        />
                        <input 
                            type="password" 
                            className="form-control"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            type="password" 
                            className="form-control"
                            autoComplete="off"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        {
                            picMessage && ( <ErrorMessage alertType="danger" >{picMessage}</ErrorMessage> )
                        }

                        <input
                            name="image"
                            className="form-control" 
                            type="file" 
                            id="formFile" 
                            onChange={ (e) => postDetails(e.target.files[0]) }
                            />
                        </p>
                        </div>
                        <ul className="list-group list-group-flush">
                        </ul>
                        <div className="card-body">
                        <button type="submit" className="btn btn-primary me-2">Actualizar</button>
                        <button className="btn btn-danger">Eliminar Cuenta</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

