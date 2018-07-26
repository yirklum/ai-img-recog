import React, { Component } from "react";
import "./SignIn.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubmitBtn from "../../components/SubmitBtn";
import Input from "../../components/Input";
import Container from "../../components/Container";




class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (

            <Container fluid>
                <Header />
                <form className="signIn-form">
                    <h3 className="signin-heading"> Hello </h3>
                    <Input
                        name='email'
                        placeholder='Email'
                        onChange={event => this.onChange(event)}
                        value={this.state.email} />
                    <Input
                        name='password'
                        placeholder='Password'
                        type='password'
                        onChange={event => this.onChange(event)}
                        value={this.state.password} />
                    <br />
                    <SubmitBtn onClick={this.onSubmit} />
                </form>
                <Footer />
            </Container>
        );
    }

}

export default SignIn;

