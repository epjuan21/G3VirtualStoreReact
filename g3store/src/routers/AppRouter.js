import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { ContactScreen } from "../Pages/ContactScreen";
import { TeamScreen } from "../Pages/TeamScreen";
import { HomeScreen } from "../Pages/HomeScreen";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";
import { GestionPeajes } from "../Pages/GestionPeajes";
import { GestionTransporte } from "../Pages/GestionTransporte";
import { SoftwareFactory } from "../Pages/SoftwareFactory";
 
export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/auth" component={ AuthRouter } />
                <Route path="/contacto" component={ ContactScreen } />
                <Route path="/equipo" component={ TeamScreen } />
                <Route path="/gestion-peajes" component={ GestionPeajes } />
                <Route path="/gestion-transporte" component={ GestionTransporte } />
                <Route path="/software-factory" component={ SoftwareFactory } />
                <Route exact path="/" component={ HomeScreen } />
                <Redirect to="/auth/login" />
            </Switch>
            <Footer />
        </Router>
    )
}