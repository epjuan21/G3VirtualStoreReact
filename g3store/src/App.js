import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { Provider } from 'react-redux'
import store from './storej'

export const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
            
    )
}
