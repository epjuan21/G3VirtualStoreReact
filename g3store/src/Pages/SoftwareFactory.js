import React from 'react'
import SoftwareFactoryCover from '../assets/img/covers/SoftwareFactoryCover.png'
import DesktopApp from '../assets/img/softwarefactory/DesktopApp.png'

export const SoftwareFactory = () => {
    return (
        <>
            <div>
                {/* <!-- Hero --> */}

                <div className="container py-5">
                    <div
                        className="row flex-lg-row-reverse align-items-center d-sm-flex justify-content-sm-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img
                                src={ SoftwareFactoryCover }
                                className="d-block mx-lg-auto img-fluid"
                                alt="Bootstrap Themes"
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6 d-sm-flex justify-content-sm-center">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Software Factory</h1>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>

                {/* Productos */}

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Creación de Software a la medida de sus necesidades</h1>
                            <p>
                                Aplicaciones web y moviles creadas por el mejor equipo de desarrollo del mercado. Aplicaciones creadas con base en sus necesidades.
                            </p>
                        </div>
                    </div>
                    <hr className="featurette-divider mb-5" />
                </div>

                <div className="container">
                    <div className="row">

                        {/* <!-- Productos--> */}

                        <div
                            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
                            <div className="card_container">
                                <div className="card_image">
                                    <img
                                        src={ DesktopApp } alt="Prueba" />
                                </div>
                                <div className="card_title">
                                    Aplicaciones de Escritorio
                                </div>
                                <div className="card_text">
                                    <p>Product Description</p>
                                </div>
                                <div className="card_footer">
                                    <div className="card_price">Product Price</div>
                                    <div>
                                        <button className="btn btn-primary btn-sm">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr />
            </div>
        </>
    )
}
