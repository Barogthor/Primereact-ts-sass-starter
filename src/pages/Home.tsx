import React from "react";
import Grid from "../components/Layout/Grid";
import Cell from "../components/Layout/Cell";

class Home extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render(){
        return <Grid>
            <Cell style={{backgroundColor: "red"}}>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
            <Cell>5</Cell>
        </Grid>
    }
}

export default Home