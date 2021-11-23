import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../actions/productsActions';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { Loading } from '../components/ui/Loading';
import routes from '../helpers/routes';

export const ProductCreate = ({history}) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/jfrvdata/image/upload/v1637429204/Users/defaultUser.png")

    const dispatch = useDispatch();
    
    const productCreate = useSelector((state) => state.productCreate)
    const { loading, error, product } = productCreate;

    console.log(product)

    const resetHandler = (e) => {
        e.preventDefault();
        setName("");
        setPrice(0);
        setDescription("");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !price || !description) return;
        dispatch(createProductAction(name, price, description, imageUrl));
    
        resetHandler(e);
        history.push(routes.product.list);
      };

    return (
        <div className="container">
            <h1>Crear Producto</h1>

            {error && <ErrorMessage alertType="danger" > {error} </ErrorMessage>}
            { loading && <Loading/> }

            <form onSubmit={submitHandler}>
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

                <button type="submit" className="btn btn-primary">Crear Producto</button>
                <button onClick={resetHandler} className="btn btn-outline-danger ms-2">Resetear Formulario</button>
            </form>


        </div>
    )
}
