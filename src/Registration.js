import React from 'react';
import Button from 'react-bootstrap/Button'
import {Form,FormGroup,FormLabel,FormControl,FormText} from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

//Add relevant imports

export default class Registration extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    //render form
    render(){
        return (
            <div id = "registrationForm">
                {/* <TextInput 
                    id = "usernameInput" 
                    onChangeText = {this.onUsernameChange}
                    style = {style.form}
                />
                <TextInput 
                    id = "passwordInput" 
                    onChangeText = {this.onPasswordChange}
                    style = {style.form}
                />
                <Button id = "submitForm" style = {style.button}>Submit</Button> */}
                <Container fluid = "md">
                    <Row>
                        <h1 style = {style.header}>Sign Up</h1>
                    </Row>
                    <Row>
                        <Form style = {style.form}>
                            <FormGroup style = {style.formGroup}>
                                <FormLabel>First Name</FormLabel>
                                <FormControl type = "" placeholder ="First Name"></FormControl>
                            </FormGroup>
                            <FormGroup style = {style.formGroup}>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl type = "" placeholder ="Last Name"></FormControl>
                            </FormGroup>
                            <FormGroup style = {style.formGroup}>
                                <FormLabel>Email</FormLabel>
                                <FormControl type = "email" placeholder ="Email"></FormControl>
                                {/* <FormText>Don't worry, you won't get spam.</FormText> */}
                            </FormGroup>
                            <FormGroup style = {style.formGroup}>
                                <FormLabel>Password</FormLabel>
                                <FormControl type = "password" placeholder ="Password"></FormControl>
                                {/* <FormText>Don't share your password with others.</FormText> */}
                            </FormGroup>
                            <FormGroup style = {style.formGroup}>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl type = "password" placeholder ="Confirm Password"></FormControl>
                                {/* <FormText>Don't share your password with others.</FormText> */}
                            </FormGroup>
                            <Button id = "submitForm" style = {style.button}>Submit</Button> 
                            {/* <FormGroup>
                                <a href = "" style = {style.formGroup}>Forgot password?</a>
                            </FormGroup> */}
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }

    //update username var on textfield update
    onUsernameChange(newText){
        this.state = {username:newText, password:this.state.password};
    }

    //update password var on textfield update
    onPasswordChange(newText){
        this.state = {username:this.state.username, password:newText};
    }

    //send state.email & state.password to firebase Auth
    handleSubmit(){

    }

}

//CSS styling
const style = {
    header:{
        width: "50%",
        height: "3vh",
        fontSize: "200%",
        textAlign: "",
        paddingBottom:"4%",
        paddingTop:"4%",
        margin: "auto"
    },
    button:{
        
    },
    form:{
        paddingBottom:"1%",
        width:"50%",
        margin: "auto"
    },
    formGroup:{
        paddingBottom:"1%"
    }

}