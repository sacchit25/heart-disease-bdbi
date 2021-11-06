import React from 'react';
//Add relevant imports

export default class LoginScreen extends React.Component{

    constructor(props)
    {
        super(props);
        state = {
            username = "",
            password = ""
        }
    }

    //render form
    render(){
        return (
            <div id = "loginForm">
                <TextInput 
                    id = "usernameInput" 
                    onChangeText = {this.onUsernameChange}
                    style = {style.form}
                />
                <TextInput 
                    id = "passwordInput" 
                    onChangeText = {this.onPasswordChange}
                    style = {style.form}
                />
                <Button id = "submitForm" style = {style.button}>Submit</Button>
            </div>
        );
    }

    //update username var on textfield update
    onUsernameChange(newText){
        this.state = {username = newText, password = this.state.password};
    }

    //update password var on textfield update
    onPasswordChange(newText){
        this.state = {username = this.state.username, password = newText};
    }

    //send state.email & state.password to firebase Auth
    handleSubmit(){

    }

}

//CSS styling
const style = {
    
    button:{

    },
    form:{

    }

}