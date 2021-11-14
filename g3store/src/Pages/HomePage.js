import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <>

            {/* Cover */}

            <div className="cover_container cover_img">
                <div className="container">
                    <div className="cover_title">G3 Virtual Store</div>
                    <div className="cover_subtitle">Software de Calidad</div>
                </div>
            </div>

            {/* Title */}

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Conoce nuestros productos y servicios</h1>
                    </div>
                </div>
            </div>

            {/* Categories */}

            <div className="container mb-3">
                <div className="row">

                    {/* Categories - Gestión Peajes */}

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
                        <div className="card_container card_container_home">
                            <div className="card_image">
                                <img alt="Gestión de Peajes" src="https://res.cloudinary.com/jfrvdata/image/upload/v1635635467/Categories/GestionPeajes.png" />
                            </div>
                            <div className="card_title">Gestión de Peajes</div>
                            <div className="card_text">
                                <p>
                                    Soluciones avanzadas para la administración de cobros a los usuarios de carreteras y vías urbanas, de acuerdo con las modalidades y circunstancias de uso.
                                </p>
                            </div>
                            <div className="card_button">
                                <Link
                                    className="btn btn-outline-primary"
                                    to="/gestion-peajes"
                                >
                                    Mas información
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Categories - Gestión de Transporte */}

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
                        <div className="card_container card_container_home">
                            <div className="card_image">
                                <img alt="Gestión de Transporte" src="https://res.cloudinary.com/jfrvdata/image/upload/v1635635467/Categories/GestionTransporte.png" />
                            </div>
                            <div className="card_title">Gestión de Transporte</div>
                            <div className="card_text">
                                <p>
                                    Aplicaciones web para la gestión de la cadena productiva de transporte terrestre: control de peso vehicular, distribución y flota de vehículos.
                                </p>
                            </div>
                            <div className="card_button">
                                <Link
                                    className="btn btn-outline-primary"
                                    to="/gestion-transporte"
                                >
                                    Mas información
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Categories - Software Factory */}

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2">
                        <div className="card_container card_container_home">
                            <div className="card_image">
                                <img alt="Software Factory" src="https://res.cloudinary.com/jfrvdata/image/upload/v1635635468/Categories/SofwareFactory.png" />
                            </div>
                            <div className="card_title">Software Factory</div>
                            <div className="card_text">
                                <p>
                                    Desarrollo web y moviles ajustadas a las necesidades particulares en el área de tu preferencia
                                </p>
                            </div>
                            <div className="card_button">
                                <Link
                                    className="btn btn-outline-primary"
                                    to="/software-factory"
                                >
                                    Mas información
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Formulario de Contacto */}

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Solicite más información</h1>
                    </div>
                </div>
            </div>

            <form action="" className="d-flex">
                <div className="container mb-3">
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" placeholder="Nombres" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Apellidos" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="email" placeholder="E-Mail" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="tel" placeholder="Teléfono" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <textarea
                                className="form-control"
                                placeholder="Mensaje"
                                rows="3"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" forhtml="exampleCheck1">
                            En cumplimiento de la Constitución Política Nacional, Ley 1581 de
                            2012 y el decreto 1377 de 2013, es responsable del tratamiento de
                            sus datos personales. ¿Autoriza a G3 Virtual Store al manejo de sus
                            datos personales?</label>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
