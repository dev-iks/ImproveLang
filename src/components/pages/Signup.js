import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import Header from "./Header";


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            disabled: ''
        }
    }

    responseGoogle(response) {
        let {profileObj, tokenObj} = response;
        if (!response.error) {
            this.setState({
                user: {
                    name: profileObj.name,
                    email: profileObj.email,
                    avatar: profileObj.imageUrl,
                    token: tokenObj.access_token,
                    auth_service_id: response.El,
                    provider: 'google' 
                },
                redirect: true
            });
            sessionStorage.setItem('auth_service_id', response.El);
            sessionStorage.setItem('name', profileObj.name);
        }
        this.props.onSignupGoogle(this.state.user);
    }
    
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'chat'}/>
            )
        }

        return(
            <div>
                <Header/>
                <header className="masthead">
                    <div className="container h-75">
                        <div className="row h-75">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <div className="custom-card d-flex justify-content-center">
                                        <h2 className="card-title text-center">Sign up page</h2>                                                
                                        <div className="d-flex justify-content-center">
                                            <GoogleLogin
                                                clientId="279950885399-k8ds2ur5rbf17phd41l5l2vtksfeb3st.apps.googleusercontent.com"
                                                buttonText="Sign up with Google"
                                                onSuccess={this.responseGoogle.bind(this)}
                                                onFailure={this.responseGoogle.bind(this)}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Signup;