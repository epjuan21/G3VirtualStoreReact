import React from 'react'

export const ProductCard = (props) => {
    return (
        <>
            <div
                className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
                <div className="card_container">
                    <div className="card_image">
                        <img
                            src={props.imageUrl} alt="Prueba" />
                    </div>
                    <div className="card_title">
                        {props.name}
                    </div>
                    <div className="card_text">
                        <p>{props.description}</p>
                    </div>
                    <div className="card_footer">
                        <div className="card_price">{props.price}</div>
                        <div>
                            <button className="btn btn-primary btn-sm">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
