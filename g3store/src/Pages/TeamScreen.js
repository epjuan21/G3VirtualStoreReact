import React from 'react'
import Team from '../assets/img/covers/Team.png'
import JuanCarlos from '../assets/img/team/JuanCarlos.png'
import AlbertoDuque from '../assets/img/team/AlbertoDuque.png'
import CristianRozo from '../assets/img/team/CristianRozo.png'
import JessitAnaya from '../assets/img/team/JessitAnaya.png'
import JuanFernando from '../assets/img/team/JuanFernando.png'

export const TeamScreen = () => {
    return (
        <div className="container">
            <div className="container py-5">
                <div
                    className="row flex-lg-row-reverse align-items-center d-sm-flex justify-content-sm-center g-5 py-5" >
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src={ Team }
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6 d-sm-flex justify-content-sm-center">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Quiénes Somos?</h1>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>

            {/* Equipo */}

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Conoce más sobre nuestro equipo de desarrollo</h1>
                        <p>
                            Un grupo de jóvenes emprendedores que los últimos años han puesto
                            sus habilidades al servicio del desarrollo web. Conoce un poco, a
                            quienes hacen más simple el ambiente virtual en el que te mueves.
                        </p>
                    </div>
                </div>
                <hr className="featurette-divider mb-5" />
            </div>

            <div className="container team">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4">
                        <img src={ JuanCarlos } className="rounded" alt="Juan Carlos Castro" />

                        <h5>Juan Carlos Castro</h5>
                        <p>
                            Product Owner y Desarrollador Ingeniero de sistemas especialista en
                            gerencia de proyectos con certificación PMP, Scrum Master e ITIL.
                            con experiencia en dirección de proyectos de desarrollo de software,
                            bajo marcos de trabajo ágiles y tradicionales.
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src={ JuanFernando } className="rounded" alt="Juan Fernando Ramirez" />

                        <h5>Juan Fernando Ramirez</h5>
                        <p>
                            Scrum Master y Desarrollador Manejo de HTML, CSS, Javascript, Vue,
                            Python, Java, Bases de Datos Relacionales en SQL y No Relacionales
                            en MongoDB. Manejo de Metodologías Ágiles de Desarrollo.
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src={ JessitAnaya } className="rounded" alt="Jessit Anaya" />

                        <h5>Jessit Anaya Alsina</h5>
                        <p>
                            Desarrollador. Manejo de Python, Java, HTML, CSS, Javascript. Manejo
                            de Metodologías Ágiles de desarrollo. Bases de Datos Relacionales en
                            SQL y No Relacionales. Ingeniero Industrial. Especialista en
                            Gerencia de Proyectos.
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src={ CristianRozo } className="rounded" alt="Alberto Dueque" />

                        <h5>Cristian Rozo López</h5>
                        <p>
                            Desarrollador. Manejo de HTML, CSS, Javascript, Python, Java, Bases
                            de Datos Relacionales en SQL y No Relacionales en MongoDB. Manejo de
                            Metodologías Ágiles de Desarrollo.
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src={ AlbertoDuque } className="rounded" alt="Alberto Duque" />

                        <h5>Alberto Duque Villegas</h5>
                        <p>
                            Desarrollador web, con conocimientos de Python, Java, Javascript,
                            HTML, CSS, MySQL. Solution Consultant Human Resources – mySAP 2005,
                            Academia SAP. Psicólogo, especialista en Alta Gerencia.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
