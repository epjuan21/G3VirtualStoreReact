import React from 'react'
import { NavLink } from 'react-router-dom'

export const SingleProduct = (props) => {

    const deleteHandler = event => {
        props.onClick(event.target.value);
    }

    return (
        <tr>
            <td><img className="img-thumbnail rounded-circle align-middle" style={{ width: 50 }} src={props.image} alt="Producto de Ejemplo" /></td>
            <td className="fw-light col-2">{props.name}</td>
            <td className="fw-light col-1">{props.price}</td>
            <td className="fw-light col-6">{props.description}</td>
            <td className="align-middle col-1">
                <div className="d-flex d-grid col-12 mx-auto">
                    <NavLink className="btn btn-primary btn-sm" to={`/admin/edit/product/${props._id}`}>Editar</NavLink>
                    <button className="btn btn-outline-danger btn-sm mx-2" onClick={deleteHandler}>Eliminar</button>
                </div>
            </td>
        </tr>
    )
}
