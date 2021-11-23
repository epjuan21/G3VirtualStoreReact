import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, updateProductAction } from '../actions/productsActions';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { Loading } from '../components/ui/Loading';
import routes from '../helpers/routes';

export const Product = ({match, history}) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/jfrvdata/image/upload/v1637429204/Users/defaultUser.png")
    const [picMessage, setPicMessage] = useState(null);

    const dispatch = useDispatch();

    const productUpdate = useSelector((state) => state.productUpdate);
    const { loading, error } = productUpdate;

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Esta seguro?")){
            dispatch(deleteProductAction(id))
        }
    }

    useEffect(() => {
        const fetching = async () => {
            const config = { baseURL: 'http://localhost:3000/api/v1' }
            const { data } = await axios.get(`/products/${match.params.id}`,config)
            setName(data.name);
            setPrice(data.price);
            setDescription(data.description);
            setImageUrl(data.imageUrl);
        }
        fetching();
    }, [match.params.id])

    const resetHandler = () => {
        setName("");
        setPrice("");
        setDescription("");
        setImageUrl("");
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
                setImageUrl(data.url.toString());
            }).catch((err) => {
                console.log(err)
            })
        } else {
            return setPicMessage('Por favor seleccione una Imagen') 
        }
    }

    const updateHandler = (e) => {
        e.preventDefault();
        if (!name || !price || !description || !imageUrl) return
        dispatch(updateProductAction(match.params.id, name, price, description, imageUrl));

        resetHandler();
        history.push(routes.product.list)
    }

    return (
        <div className="container">
            <h1>Editar Producto</h1>

            {error && <ErrorMessage alertType="danger" > {error} </ErrorMessage>}
            { loading && <Loading/> }

            {errorDelete && ( <ErrorMessage  alertType="danger">{errorDelete}</ErrorMessage> )}
            {successDelete && ( <ErrorMessage  alertType="success">Eliminado Correctamente</ErrorMessage> )}

            {loadingDelete && <Loading/>}

            <div className="card">
                <div className="d-flex my-2 mx-2">
                    <img src={imageUrl} alt={name} style={{ width: 150 }} />
                </div>
                <div className="card-body">
                <h5 className="card-title mb-4">{name}</h5>
                    <form onSubmit={updateHandler}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input
                                type="number"
                                className="form-control"
                                id="precio"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="descripcion " className="form-label">Descripcion</label>
                            <textarea
                                className="form-control"
                                id="descripcion"
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </textarea>
                        </div>

                        {
                            picMessage && ( <ErrorMessage alertType="danger" >{picMessage}</ErrorMessage> )
                        }

                        <div className="mb-3">
                            <label forhtml="formFile" className="form-label">Seleccione una imagen</label>
                            <input
                                name="image"
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={ (e) => postDetails(e.target.files[0]) }
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Actualizar Producto</button>
                        <button onClick={() => deleteHandler(match.params.id)} className="btn btn-outline-danger ms-2">Eliminar Producto</button>
                    </form>
                </div>
            </div>


        </div>
    )
}
