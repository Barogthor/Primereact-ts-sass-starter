import React, {Component, FormEvent, Fragment} from "react";
import {connect} from "react-redux";
import {InputText} from "primereact/inputtext";
import autobind from "autobind-decorator";
import Grid from "../Grid";
import Cell from "../Cell";
import {Password} from "primereact/password";
import {SIGNIN_REQUEST} from "../../../store/User/types";
import {Button} from "primereact/button";


class SignInForm extends Component<any>{
    state = {username: "", email: "", password: ""}

    @autobind
    onChangeUsername(e: FormEvent<HTMLInputElement>){
        const input: HTMLInputElement = e.target as HTMLInputElement
        this.setState({username: input.value})
    }

    @autobind
    onChangePassword(e: FormEvent<HTMLInputElement>){
        const input: HTMLInputElement = e.target as HTMLInputElement
        this.setState({password: input.value})
    }

    render(){
        return <Grid>
            <Cell columnWidth={4}>
                <span className="p-float-label">
                    <InputText id="signin-username" value={this.state.username} onChange={this.onChangeUsername} />
                    <label htmlFor="signin-username">Username</label>
                </span>
            </Cell>
            <Cell columnWidth={4}>
                <span className="p-float-label">
                    <Password id="signin-password" value={this.state.password} onChange={this.onChangePassword} />
                    <label htmlFor="signin-password">Password</label>
                </span>
            </Cell>
            <Button onClick={() => this.props.signIn({hello:"World"})}>Submit</Button>
        </Grid>
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: payload => dispatch({type: SIGNIN_REQUEST, payload})
})

export default connect(() => {},mapDispatchToProps)(SignInForm)