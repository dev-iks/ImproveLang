import React, {Component} from 'react';
import Header from "./Header";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const refs_form = this.refs;
        const email = refs_form.email.value;
        const message = refs_form.message.value;
        const name = refs_form.name.value;
        const subject = refs_form.subject.value;
        const formValues = {
            email,
            name,
            subject, 
            message,
        };

        this.props.onSubmitContactForm(formValues);
        for (let key in refs_form) {
            refs_form[key].value = '';
        }
    }

    render() {
        return(

            <div>
                <Header />
                <header className="masthead">
                    <div className="container h-50">
                        <div className="row h-75">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto  mt-5">
                                    <h1 className="pb-5">Contact</h1>
                                    <form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" ref="name" id="name" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" className="form-control" ref="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" ref="subject" className="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea className="form-control" id="message" ref="message" placeholder="Enter Message" rows="3">

                                            </textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Contact;