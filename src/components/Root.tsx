import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import App from "./App";
import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import Home3 from "../pages/Home3";

import '../assets/index.scss';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';


const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/home2"} component={Home2} />
                <Route exact path={"/home3"} component={Home3} />
            </App>
        </Router>
    </Provider>
)




Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root