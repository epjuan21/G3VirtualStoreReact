import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { ContactScreen } from "../Pages/ContactScreen";
import { TeamScreen } from "../Pages/TeamScreen";
import { HomePage } from "../Pages/HomePage";
import { GestionPeajes } from "../Pages/GestionPeajes";
import { GestionTransporte } from "../Pages/GestionTransporte";
import { SoftwareFactory } from "../Pages/SoftwareFactory";
import { NotFoundPage } from "../Pages/NotFoundPage";
import routes from "../helpers/routes";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";
import { ProductsPage } from "../Pages/ProductsPage";
import { ProductCreate } from "../Pages/ProductCreate";
import { Product } from "../Pages/Product";
import { ProfilePage } from "../Pages/Profile/ProfilePage";

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path={routes.home} component={HomePage} />
                    <Route path="/auth" component={AuthRouter} />
                    <Route path={routes.contacto} component={ContactScreen} />
                    <Route path={routes.equipo} component={TeamScreen} />
                    <Route path={routes.gestionpeajes} component={GestionPeajes} />
                    <Route path={routes.gestiontransporte} component={GestionTransporte} />
                    <Route path={routes.softwarefactory} component={SoftwareFactory} />
                    <Route exact path={routes.product.list} component={ProductsPage} />
                    <Route exact path={routes.product.create} component={ProductCreate} />
                    <Route exact path='/admin/edit/product/:id' component={Product} />
                    <Route path={routes.profile} component={ProfilePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}