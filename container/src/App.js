import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ctr'
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <h1>Hi, there!</h1>
                    <hr />

                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}