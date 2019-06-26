import React, {Component} from 'react';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Settings from './components/pages/Settings';

import Socket from './Socket';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import Tips from "./components/pages/Tips";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: {},
            activeTab: '',
            connected: false,
            loggedIn: false,
            redirect: false,
            user: '',
            isOpen: false,
            moreChannels: []
        }
    }

    componentDidMount() {
        let ws = new WebSocket('wss://localhost:4000/chat');
        let socket = this.socket = new Socket(ws);
        socket.on('connect', this.onConnect.bind(this));
        socket.on('disconnect', this.onDisconnect.bind(this));
        socket.on('channel add', this.onAddChannel.bind(this));

        socket.on('user add', this.onAddUser.bind(this));
        socket.on('user edit', this.onEditUser.bind(this));
        socket.on('user remove', this.onRemoveUser.bind(this));
        socket.on('message add', this.onMessageAdd.bind(this));


        socket.on('google signup', this.onSignupGoogle.bind(this));
        socket.on('check login', this.onCheckLoggedin.bind(this));
        socket.on('sign up', this.onSignup.bind(this));
        socket.on('more channels', this.onMoreChannels.bind(this));
    }

    onCheckLoggedin(msg) {
        if (msg === 'Not logged in') {
            console.log(msg)
        } else {
            let user = msg
            this.setState({user: user})
        }
    }

    onSignup(message) {
        console.log(message)
    }

    onSignupGoogle(user) {
        this.socket.emit('google signup', user)
        this.onCheckLogin();
    }

    onLoginGoogle(user) {
        this.socket.emit('google login', user)
        this.onCheckLogin();
    }

    onMoreChannels(channel) {
        let {moreChannels} = this.state;
        moreChannels.push.apply(moreChannels, channel);
        this.setState({
           moreChannels: [...moreChannels] 
        });
    }

    onMessageAdd(message) {
        let {messages} = this.state;
        messages.push(message);
        this.setState({messages});
    }

    onAddUser(user) {
        let {users} = this.state;
        users.push(user);
        this.setState({
            // user: user,
            users: users
        });
    }

    onEditUser(editUser) {
        let {users} = this.state;
        users = users.map(user => {
            if(editUser.id === user.id) {
                this.setState({user: editUser});
                return editUser;
            }
            return user;
        });
        this.setState({users});
    }

    // Removing or deleting
    onRemoveUser(removeUser) {
        let {users} = this.state;
        users = users.filter(user => {
            return user.id !== removeUser.id;
        });
        this.setState({users});
    }

    onConnect() {
        this.setState({connected: true});
        this.socket.emit('channel subscribe');
        this.socket.emit('user subscribe');
        this.onCheckLogin();
    }

    onSearchChannels(channelName) {
        this.socket.emit('search channels', {channel: channelName});
    }

    onDisconnect() {
        this.setState({connected: false});
    }

    onAddChannel(channel) {
        let {channels} = this.state;
        channels.push(channel);
        this.setState({channels})
    }

    addChannel(name) {
        this.socket.emit('channel add', {name})
    }

    setChannel(activeChannel) {
        this.setState({activeChannel});
        this.socket.emit('channel unsubscribe');
        this.setState({messages: []});
        this.socket.emit('message subscribe', {
            channelId: activeChannel.id
        })
    }

    setUserName(name){
        this.socket.emit('user edit', {name});
    }
    
    addMessage(body){
        let {activeChannel} = this.state;
        this.socket.emit('message add',
        {channelId: activeChannel.id, body});
    }

    deleteMessage(messageId) {
        let {activeChannel, messages} = this.state;
        this.socket.emit("message delete", {
            channelId: activeChannel.id, 
            id: messageId 
        });
        messages = messages.filter(message => {
            return message.id !== messageId
        });
        this.setState({messages});
    }

    onCheckLogin() {
        let providerID = sessionStorage.getItem('auth_service_id');
        if (providerID) {
            this.socket.emit('check login', {auth_service_id: providerID});
        }
    }

    onSubmitContactForm(formValues) {
        this.socket.emit('send contact-form', formValues);
    }

    onClickLogout(e) {
        sessionStorage.removeItem('auth_service_id');
        if (!this.state.redirect) {
            this.setState({redirect: true});
        }
    }

    changeStateOfRedirect() {
        if (this.state.redirect) {
            this.setState({redirect: false});
        }
    }

    changeUsername(username) {
        this.socket.emit("change username", {username})
    }

    onClick(e) {

    }

    toggleSettingsModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onChangeData(data) {
        // console.log(data);
    }

    clearSearch() {
        this.setState({ moreChannels: [] });
    }
    
    render() {
        const { user, isOpen } = this.state;
        if (this.props.redirect) {
            this.setState({redirect: false});
            console.log(this.state.redirect)
            return (
                <Redirect to={'/'}/>
            )
        }

        return (
            <Router>
                <div className="container-fluid">
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/tips" component={Tips} />
                        <Route exact path="/settings" render={props => ( 
                            <Settings {...this.state} changeUsername={this.changeUsername.bind(this)} />
                        )} />
                        
                        <Route exact path="/contact" render={props => (
                            <Contact onSubmitContactForm={this.onSubmitContactForm.bind(this)} />
                            )} />
                        <Route exact path="/login" render={props => (
                            <React.Fragment>
                                <Login {...this.state}
                                        onLoginGoogle={this.onLoginGoogle.bind(this)}
                                />
                            </React.Fragment>
                                )} />
                        <Route exact path="/logout" render={props => (
                            <React.Fragment>

                            </React.Fragment>
                        )}/>
                    </div>
                    <div>
                        <Route exact path="/signup" render={props => (
                                <Signup {...this.state}
                                    onSignupGoogle={this.onSignupGoogle.bind(this)}
                                />
                        )} />
                    </div>
                    <div>
                        <Route exact path="/chat" render={props => (
                            <Chat   {...this.state}
                                onClickLogout={this.onClickLogout.bind(this)} 
                                addChannel={this.addChannel.bind(this)}
                                setChannel={this.setChannel.bind(this)}
                                setUserName={this.setUserName.bind(this)}
                                addMessage={this.addMessage.bind(this)}
                                onSearchChannels={this.onSearchChannels.bind(this)}
                                deleteMessage={this.deleteMessage.bind(this)}
                                clearSearch={this.clearSearch.bind(this)}
                                changeStateOfRedirect={this.changeStateOfRedirect.bind(this)}
                            /> 
                        )}/>
                    </div>
                </div>
            </Router>
        )
    }
}

const svgStyle = {
    clipRule:"evenodd",
    fillRule:"evenodd",
    strokeLinejoin:"round",
    strokeMiterlimit:1.41421
};

export default App;
