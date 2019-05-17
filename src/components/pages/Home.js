import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.getUser = this.getUser.bind(this)
    }

    getUser() {
        let name = localStorage.get('name');
        this.setState({
            user_name: name
        });
    }

    render() {
        let name = this.state.user_name ? this.state.user_name : 'mate';

        return(
            <div>
                <Header />
                <header className="masthead">
                    <div className="container h-75">
                        <div className="row h-75">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5">Hello, {name}! Welcome to ImproveLang App. Let's find you some friends!</h1>
                                    <Link to={'/signup'} className="link btn btn-outline btn-xl">
                                        Start Now for Free!
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h3 className="mb-5">Come in and chat with foreigners</h3>
                                    <blockquote>
                                        Don't ever let someone tell you, you can't do something. Not even me.
                                        You got a dream, you got to protect it. People can’t do something themselves,
                                        they want to tell you you can’t do it. You want something, go get it.
                                    </blockquote>
                                    <span className="border border-dark">
                                    <img src={"https://urlzs.com/261g6"} className={'rounded-circle'} alt="Will Smith"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Home;