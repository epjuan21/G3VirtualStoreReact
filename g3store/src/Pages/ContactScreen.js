import React from 'react'
import Contact from '../assets/img/covers/Contact.png'
import Direccion from '../assets/img/forms/Direccion.png'
import Telefono from '../assets/img/forms/Telefono.png'
import Correo from '../assets/img/forms/Correo.png'

export const ContactScreen = () => {
    return (
        <div className="container">

            {/* Inicio Hero */}

            <div className="container py-5">
                <div className="row flex-lg-row-reverse align-items-center d-sm-flex justify-content-sm-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src={ Contact }
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6 d-sm-flex justify-content-sm-center">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Contáctanos</h1>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>

            {/* Final Hero */}

            {/* Productos */}

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Datos de Contacto</h1>
                    </div>
                </div>
                <hr className="featurette-divider mb-5" />
            </div>

            {/* Inicio Datos de Contacto */}

            <div className="container">
                <div className="row border border-primary rounded">
                    <div className="col">
                        <ul className="list-group">
                            <li
                                className="list-group-item d-flex gap-3 py-3 border-0"
                                aria-current="true"
                            >
                                <img
                                    src={ Direccion }
                                    alt="twbs"
                                    width="32"
                                    height="32"
                                    className="rounded-circle flex-shrink-0"
                                />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-0">Dirección</h6>
                                        <p className="mb-0 opacity-75">Bogotá: Cr. 18 No. 79 A – 42</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul className="list-group">
                            <li
                                className="list-group-item d-flex gap-3 py-3 border-0"
                                aria-current="true"
                            >
                                <img
                                    src={ Telefono }
                                    alt="twbs"
                                    width="32"
                                    height="32"
                                    className="rounded-circle flex-shrink-0"
                                />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-0">Teléfonos</h6>
                                        <p className="mb-0 opacity-75">Línea de Bogotá: 57(1) 5802606</p>
                                        <p className="mb-0 opacity-75">Barranquilla: 57(5) 3225103</p>
                                        <p className="mb-0 opacity-75">Cali: 57(2) 3989476</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul className="list-group">
                            <li
                                className="list-group-item d-flex gap-3 py-3 border-0"
                                aria-current="true"
                            >
                                <img
                                    src={ Correo }
                                    alt="twbs"
                                    width="32"
                                    height="32"
                                    className="rounded-circle flex-shrink-0"
                                />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-0">Correo</h6>
                                        <p className="mb-0 opacity-75">info@g3virtualstore.com</p>
                                        <p className="mb-0 opacity-75">comercial@g3virtualstore.com</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <Final Datos de Contacto  */}

                {/* <Inicio Formulario de Contacto  */}

                <div className="row mt-5">
                    <div className="col border rounded py-3 px-3">
                        <form>
                            <legend>
                                Diligencie el siguiente formulario para solicitar más información
                                acerca de nuestros productos y servicios
                            </legend>

                            <div className="row g-3 mb-3">
                                <div className="col">
                                    <label forhtml="name" className="form-label">Nombres</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="col">
                                    <label forhtml="surname" className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" id="surname" />
                                </div>
                                <div className="col">
                                    <label forhtml="mail" className="form-label">Correo</label>
                                    <input type="email" className="form-control" id="mail" />
                                </div>
                            </div>

                            <div className="row g-3 mb-3">
                                <div className="col">
                                    <label forhtml="inputAddress2" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="inputAddress2" />
                                </div>
                                <div className="col">
                                    <label forhtml="tel" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="tel" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <p>Sobre que producto desea recibir mas información</p>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            value="option1"
                                        />
                                        <label className="form-check-label" forhtml="inlineCheckbox1"
                                        >Gestión de Transporte</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox2"
                                            value="option2"
                                        />
                                        <label className="form-check-label" forhtml="inlineCheckbox2"
                                        >Gestión de Peajes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox3"
                                            value="option3"
                                        />
                                        <label className="form-check-label" forhtml="inlineCheckbox3"
                                        >Software Factory</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox4"
                                            value="option4"
                                        />
                                        <label className="form-check-label" forhtml="inlineCheckbox4"
                                        >Todos</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12 mb-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                        />
                                        <label className="form-check-label" forhtml="gridCheck">
                                            En cumplimiento de la Constitución Política Nacional, Ley
                                            1581 de 2012 y el decreto 1377 de 2013, es responsable del
                                            tratamiento de sus datos personales. ¿Autoriza a G3 Virtual
                                            Store al manejo de sus datos personales?
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Final Formulario de Contacto */}
            </div>

        </div>
    )
}
