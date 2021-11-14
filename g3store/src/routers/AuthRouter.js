import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from '../components/auth/LoginPage'
import { RegisterPage } from '../components/auth/RegisterPage'
import routes from '../helpers/routes'
import { NotFoundPage } from '../Pages/NotFoundPage'

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path={routes.auth.login} component={ LoginPage } />
                <Route exact path={routes.auth.register} component={ RegisterPage } />
                <Route path="*" component={ NotFoundPage } />
            </Switch>
        </div>
    )
}