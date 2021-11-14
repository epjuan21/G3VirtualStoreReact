import React from 'react'
import JuanFernando from '../assets/img/team/JuanFernando.png'

export const AccountPage = () => {

    return (
        <div className="container d-flex justify-content-center my-5">
            <div className="card text-center" style={{ width: 600 }}>
                <img src={JuanFernando} style={{ width: 150 }} className="card-img-top d-flex align-self-center mt-3" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Usuario de Prueba</h5>
                <p className="card-text text-muted"></p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Rol: </li>
                </ul>
                <div className="card-body">
                <button className="btn btn-primary me-2">Editar</button>
                <button className="btn btn-warning me-2">Cambiar Clave</button>
                <button className="btn btn-danger">Eliminar Cuenta</button>
                </div>
            </div>
        </div>
    )
}

