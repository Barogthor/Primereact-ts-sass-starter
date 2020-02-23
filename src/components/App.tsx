import * as React from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import Topbar from "./Topbar";


const App = ({children}) => {
    return (
        <React.Fragment>
            <Topbar/>
            <br/>
            <section>
                {children}
            </section>
        </React.Fragment>
    )
}

export default App;