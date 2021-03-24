import React, { Component } from 'react'

import EditBox from './../Components/EditBox'
import { Button } from './../Components/Button'
import Photo from './../Assets/Photo3.png'

import { signInWithGoogle } from './../Firebase/utils'


//SCSS
import './../SCSS/login.scss'

class SignIn extends Component {
    
    handleSubmit = async e => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div className = 'sign-in'>
                <div className = 'login-container'>
    
                    <div className = "imgWrap"> 
                        <div className = 'svg'>
                            <img src = {Photo} alt = 'Svg'></img>
                        </div>
                    </div>
    
                    <div className = 'box-container'>
    
                        <div className = 'head'>
                            <h4> Login</h4>
                        </div>
    
                        <form onSubmit = { this.handleSubmit }>
                            
                            <EditBox label = 'Username' name = 'username' type = 'text'></EditBox>
                            <EditBox label = 'Password' name = 'password' type = 'password'></EditBox>
                       
                            <div className = 'buttons'>
                                <Button buttonSize = 'btn--mobile' buttonColor = 'green'>Submit</Button>
                                <h5 className = 'or'>OR</h5>
                                <Button buttonSize = 'btn--mobile'  buttonStyle = 'btn--outline' buttonColor  = 'outblue' onClick = {signInWithGoogle}>
                                    Sign in using Google
                                </Button>
                            </div>
    
                        </form>
                    </div>
                    
                </div>
            </div>
        )      
    }
}

export default SignIn;