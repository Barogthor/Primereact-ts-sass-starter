import React from "react";
import Grid from "../components/Layout/Grid";
import Cell from "../components/Layout/Cell";
import SignInForm from "../components/Layout/Form/SignInForm";

class Home extends React.Component<any, any>{

    render(){
        return <Grid>
            <Cell style={{backgroundColor: "red"}}>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
            <Cell>5</Cell>
            <Cell columnWidth={6}>
                <SignInForm/>
            </Cell>
        </Grid>
    }
}

export default Home