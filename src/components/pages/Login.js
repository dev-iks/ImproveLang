import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import { Link, Redirect } from 'react-router-dom';
import Header from "./Header";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
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
        this.props.onLoginGoogle(this.state.user);
    }
    
    render() {
        const { name, email, providerPic } = this.state.user;
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
                                        <h2 className="card-title text-center">Log in to ImproveLang</h2>
                                        {
                                            name ?
                                                <div>
                                                    <img src={providerPic} alt={name} />
                                                    <span>{email}</span>
                                                    <h4>{name}</h4>
                                                </div> :
                                                <div className="d-flex justify-content-center">
                                                    <GoogleLogin
                                                        clientId="279950885399-k8ds2ur5rbf17phd41l5l2vtksfeb3st.apps.googleusercontent.com"
                                                        buttonText="Log in with Google"
                                                        onSuccess={this.responseGoogle.bind(this)}
                                                        onFailure={this.responseGoogle.bind(this)}
                                                        cookiePolicy={'single_host_origin'}
                                                    />
                                                </div>
                                        }
                                        <span className={'mt-3'}>New to ImproveLang? 
                                            <Link to={'/signup'} className={'badge badge-light'}>
                                                Sign up now »
                                            </Link>
                                        </span>
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

export default Login;