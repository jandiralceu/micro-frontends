import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default function () {
    return (
        <div>
            <StylesProvider>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path='/pricing' component={Pricing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
