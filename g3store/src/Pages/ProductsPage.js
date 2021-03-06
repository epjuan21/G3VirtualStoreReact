import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteProductAction, listProducts } from '../actions/productsActions';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { Loading } from '../components/ui/Loading';
import Pagination from '../components/ui/Pagination';
import routes from '../helpers/routes';
import { SingleProduct } from './Products/SingleProduct';

export const ProductsPage = ({ history }) => {

    const [search, setSearch] = useState("")

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const { loading, products, error } = productList;

    const [showPerPage, setShowPerPage] = useState(4)
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productCreate = useSelector((state) => state.productCreate)
    const { success: successCreate } = productCreate;

    const productUpdate = useSelector((state) => state.productUpdate);
    const { success: successUpdate } = productUpdate;

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Esta seguro?")) {
            dispatch(deleteProductAction(id))
        }
    }

    useEffect(() => {
        dispatch(listProducts())
        if (!userInfo) {
            history.push(routes.home)
        }
    }, [history, dispatch, successCreate, userInfo, successUpdate, successDelete])

    const onPaginationChange = (start, end) => {
        setPagination({start:start, end: end})
    }

    return (
        <>
            <div className="container">
                <h1>Productos</h1>

                {error && <ErrorMessage alertType="danger">{error}</ErrorMessage>}
                {loading && <Loading />}

                {errorDelete && (<ErrorMessage alertType="danger">{errorDelete}</ErrorMessage>)}
                {loadingDelete && <Loading />}

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
                            <th scpoe="col">Descripci??n</th>
                            <th scpoe="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.reverse().slice(pagination.start,pagination.end).filter(filteredProduct => (
                            filteredProduct.name.toLowerCase().includes(search.toLowerCase())
                        )).map((product) => (
                            <SingleProduct
                                key={product._id}
                                image={product.imageUrl} 
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                _id={product._id}
                                onClick={(e) => { deleteHandler(product._id) }}
                            />
                        ))
                        }
                    </tbody>
                </table>
                <Pagination 
                showPerPage={showPerPage} 
                onPaginationChange={onPaginationChange} 
                total={products?.reverse().length}
                />
            </div>
        </>
    )
}