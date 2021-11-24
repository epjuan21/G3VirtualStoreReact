import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoriesActions';
import { createProductAction } from '../actions/productsActions';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { Loading } from '../components/ui/Loading';
import routes from '../helpers/routes';

export const ProductCreate = ({ history }) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/jfrvdata/image/upload/v1637429204/Users/defaultUser.png")
    const [picMessage, setPicMessage] = useState(null);

    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList)
    const { categories } = categoryList;

    const [category, setCategory] = useState([])

    const productCreate = useSelector((state) => state.productCreate)
    const { loading, error, product } = productCreate;

    const resetHandler = (e) => {
        e.preventDefault();
        setName("");
        setPrice(0);
        setDescription("");
        setCategory(null);
    }

    const postDetails = (pic) => {

        const image = pic;

        if (image === undefined) {
            return setPicMessage('Por favor seleccione una Imagen')
        }
        setPicMessage(null)

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
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

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !price || !description || !category) return;
        dispatch(createProductAction(name, price, description, imageUrl, category));

        resetHandler(e);
        history.push(routes.product.list);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
      }

    useEffect(() => {
        dispatch(listCategories())
    }, [dispatch])

    return (
        <div className="container">
            <h1>Crear Producto</h1>

            {error && <ErrorMessage alertType="danger" > {error} </ErrorMessage>}
            {loading && <Loading />}

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

                {
                    picMessage && (<ErrorMessage alertType="danger" >{picMessage}</ErrorMessage>)
                }

                <div className="mb-3">
                    <label forhtml="formFile" className="form-label">Seleccione una imagen</label>
                    <input
                        name="image"
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(e) => postDetails(e.target.files[0])}
                    />
                </div>

                <div className="mb-3">
                    <select onChange={handleCategoryChange} className="form-select" aria-label="Default select example">
                        <option value={null}> -- Seleccione una Categoria -- </option>
                        {categories?.map((category) => <option key={category.name} value={category._id}>{category.name}</option>)}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Crear Producto</button>
                <button onClick={resetHandler} className="btn btn-outline-danger ms-2">Resetear Formulario</button>
            </form>
        </div>
    )
}
