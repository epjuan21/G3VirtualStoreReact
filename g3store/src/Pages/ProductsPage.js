import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteProductAction, listProducts } from '../actions/productsActions';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { Loading } from '../components/ui/Loading';
import routes from '../helpers/routes';

export const ProductsPage = ({history}) => {

    const [search, setSearch] = useState("")

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const { loading, products, error } = productList;

    // const history = useHistory();

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productCreate = useSelector((state) => state.productCreate)
    const { success: successCreate } = productCreate;

    const productUpdate = useSelector((state) => state.productUpdate);
    const { success: successUpdate } = productUpdate;

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Esta seguro?")){
            dispatch(deleteProductAction(id))
        }
    }

    useEffect(() => {
        dispatch(listProducts())
        if(!userInfo){
            history.push(routes.home)
        }
    },[history,dispatch,successCreate,userInfo,successUpdate,successDelete])

    return (
        <>
            <div className="container">
                <h1>Productos</h1>

                { error && <ErrorMessage alertType="danger">{ error }</ErrorMessage> }
                { loading && <Loading/> }

                {errorDelete && ( <ErrorMessage  alertType="danger">{errorDelete}</ErrorMessage> )}
                {loadingDelete && <Loading/>}


                <div className="d-flex justify-content-between mb-3">
                    <div className="col-6">
                        <NavLink className="btn btn-success" to={routes.product.create}>Crear Producto</NavLink>
                    </div>
                    <div className="col-5">
                        <input onChange={(e) => setSearch(e.target.value)} className="form-control" type="text" placeholder="Buscar" />
                    </div>

                </div>

                <table className="table table-responsive align-middle table-sm">
                    <thead className="table-light">
                        <tr>
                            <th scpoe="col">Imagen</th>
                            <th scpoe="col">Nombre</th>
                            <th scpoe="col">Precio</th>
                            <th scpoe="col">Descripción</th>
                            <th scpoe="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    { products?.reverse().filter(filteredProduct=>(
                        filteredProduct.name.toLowerCase().includes(search.toLowerCase())
                    )).map((product) => (                    
                        <tr key={product._id}>
                            <td><img className="img-thumbnail rounded-circle align-middle" style={{width: 50}} src={product.imageUrl} alt={product.name} /></td>
                            <td className="fw-light col-2">{ product.name }</td>
                            <td className="fw-light col-1">{ product.price }</td>
                            <td className="fw-light col-6">{ product.description }</td>
                            <td className="align-middle col-1">
                            <div className="d-flex d-grid col-12 mx-auto">
                                <NavLink className="btn btn-primary btn-sm" to={`/admin/edit/product/${product._id}`}>Editar</NavLink>
                                <button className="btn btn-outline-danger btn-sm mx-2" onClick={() => deleteHandler(product._id)}>Eliminar</button>
                            </div>
                            </td>
                        </tr>
                    ))
                    }  
                    </tbody>
            
                </table>


            </div>
        </>
    )
}
