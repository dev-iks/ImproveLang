import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SettingsItem from '../settings/SettingsItem';

class Settings extends Component {
    onSubmit(e) {
        e.preventDefault();
        let node = this.refs;
        let username = node.username.value;
        if (username === '') {
            return;
        }
        this.props.changeUsername(username);
        node.username.value = '';
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="wrapper">
                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h3>Settings</h3>
                            </div>

                            <ul className="list-unstyled components">
                                <li className="nav-item">
                                    <Link to="/chat">
                                        <a href="#" className="nav-link">Chat</a>
                                    </Link>
                                </li>
                                { tabs.map(tab => {
                                    return <SettingsItem tab={tab} />
                                }) }
                            </ul>
                        </nav>
                        <div className="cl-10 pl-0 text-center">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade h-100vh show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                    <h3>General</h3>
                                    <form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="username">
                                                <input type="text" name="username" id="username" ref="username" placeholder="Edit username" />
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                                    <h3>Security</h3>
                                </div>
                                <div className="tab-pane fade" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                                    <h3>Notifications</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const tabs = ["General", "Security", "Notifications", "Advanced"];

export default Settings;