import React, {Component} from 'react';
import Header from "./Header";

class Tips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    render() {
        return(

            <div>
                <Header />
                <header className="masthead">
                    <div className="container h-50">
                        <div className="row h-75">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1>Tips</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Tips;