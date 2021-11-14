import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'
import twitter from '../../assets/img/social/twitter.png'
import facebook from '../../assets/img/social/facebook.png'
import instagram from '../../assets/img/social/instagram.png'
import youtube from '../../assets/img/social/youtube.png'
import routes from '../../helpers/routes'

export const Footer = () => {
  return (
    <>
    <hr/>
    <div className="container">
      <footer className="row pt-5 my-t">
        <div className=" col col-lg-4 col-md-12 col-sm-12">
          <Link to={routes.home} className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <img src={logo} width="256" alt="" />
          </Link>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-12 mb-sm-3 mb-md-0">
          <h5>Navegación</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to={routes.home}>Inicio</Link></li>
            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to={routes.equipo}>Quiénes somos</Link></li>
            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to={routes.contacto}>Concacto</Link></li>

          </ul>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-12 mb-sm-3 mb-md-0">
          <h5>Productos y Servicios</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to={routes.gestionpeajes}>Gestión de Peajes</Link></li>
            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to={routes.gestiontransporte}>Gestión de Transporte</Link></li>
            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to={routes.softwarefactory}>Software Factory</Link></li>
          </ul>
        </div>

        <div className="row d-flex justify-content-between py-4 my-4 border-top">
          <p className="my-0 col-sm-12 col-md-6">© 2021 G3 Virtual Store - Desarrollo de Software | Todos los derechos reservados.</p>
          <ul className="list-unstyled d-flex my-0 col-sm-12 col-md-6 justify-content-center justify-content-md-end">
            <li className="ms-3"><a className="link-dark" href="https://twitter.com/"><img src={twitter} alt="Twitter" width="24" height="24" /></a></li>
            <li className="ms-3"><a className="link-dark" href="https://es-la.facebook.com/"><img src={facebook} alt="Facebook" width="24" height="24" /></a></li>
            <li className="ms-3"><a className="link-dark" href="https://www.instagram.com/"><img src={instagram} alt="Instagram" width="24" height="24" /></a></li>
            <li className="ms-3"><a className="link-dark" href="https://www.youtube.com/"><img src={youtube} alt="Youtube" width="24" height="24" /></a></li>
          </ul>
        </div>

      </footer>
    </div>
    </>
  )
}
