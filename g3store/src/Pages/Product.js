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
            {loadingDelete && <Loading/>}

            <form onSubmit={updateHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre Producto</label>
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

                <div className="mb-3">
                    <label forhtml="formFile" className="form-label">Seleccione una imagen</label>
                    <input
                        name="image"
                        className="form-control"
                        type="file"
                        id="formFile"

                    />
                </div>

                <button type="submit" className="btn btn-primary">Actualizar Producto</button>
                <button onClick={resetHandler} className="btn btn-outline-warning ms-2">Resetear Formulario</button>
                <button onClick={() => deleteHandler(match.params.id)} className="btn btn-outline-danger ms-2">Eliminar Nota</button>
            </form>


        </div>
    )
}
