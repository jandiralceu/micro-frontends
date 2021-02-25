import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ctr'
})

export default () => {
    return (
        <Router>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </Router>
    )
}