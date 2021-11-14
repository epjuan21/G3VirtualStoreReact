import React from 'react'
import { Link } from 'react-router-dom';
import NotFoundPageImg from '../assets/img/NotFoundPage.png';
import routes from '../helpers/routes';

export const NotFoundPage = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Página no encontrada</h1>
  
            <img
              src={NotFoundPageImg}
              className="img-fluid"
              alt="Página No Encontrada"
            />
          </div>
        </div>
        <div className="row">
            <div className="col text-center">
                <Link 
                    className="btn btn-primary btn-lg"
                    to={routes.home}
                    >
                    Ir al Inicio
                </Link>
            </div>
        </div>
      </div>
    )
}
