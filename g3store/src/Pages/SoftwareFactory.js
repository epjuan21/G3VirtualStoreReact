import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SoftwareFactoryCover from '../assets/img/covers/SoftwareFactoryCover.png'
import { ProductCard } from '../components/ui/ProductCard'

export const SoftwareFactory = () => {

    const [product, setProduct] = useState([])
    axios.defaults.baseURL = 'http://localhost:3000/api/v1';

    const getProducts = async() => {
        const { data } = await axios.get('/products/category/617dc9a864369afd31bae803');
        setProduct(data)
    }

    console.log(product)

    useEffect(() => {
        getProducts();
    }, [])

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
                        {
                            product.map((product) => (
                                <ProductCard
                                    key={product._id} 
                                    imageUrl={product.imageUrl} 
                                    name={product.name} 
                                    description={product.description} 
                                    price={product.price} 
                                />
                            ))
                        }
                    </div>
                </div>

                <hr />
            </div>
        </>
    )
}
