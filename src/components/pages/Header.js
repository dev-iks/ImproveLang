import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">Welcome to ImproveLang</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/tips">Tips</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/signup">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/login">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;