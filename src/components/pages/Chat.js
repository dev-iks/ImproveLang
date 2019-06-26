import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import ChannelSection from '../channels/ChannelSection';
import MessageSection from '../messages/MessageSection';
import UserSection from '../users/UserSection';
import ModalSettings from "../Modals/ModalSettings";
import ModalMoreChannels from '../Modals/ModalMoreChannels';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    onChangeData(data) {
        // console.log(data);
    }

    toggleModal() {
        this.props.clearSearch();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { user } = this.props;
        const { isOpen } = this.state; 
        if (this.props.redirect) {
            this.props.changeStateOfRedirect();
            return (
                <Redirect to={'/'}/>
            )
        }

        return(
            <div className='d-flex flex-row flex-nowrap'>
                <div>
                    <div className="card">
                        <div className={'sidebar-left'}>
                            <div className="profile-header p-3 d-flex justify-content-between">
                                <div className={'profile-img d-flex justify-content-around align-items-center'}>
                                    <img className="user__picture rounded-circle" src={user.avatar}  alt='user pic' />
                                    <div className={'profile-info ml-2 d-flex flex-column'}>
                                        <span>{user.name}</span>
                                        <span>@{user.username}</span>
                                    </div>
                                </div>
                                <div>
                                    <button className="dropdown cursor--pointer style--none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        <span className="sidebar-header-dropdown__icon">
                                            <svg width="16px" height="10px" viewBox="0 0 16 10" version="1.1" role="icon" title="Menu Icon">
                                                <g stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
                                                    <g transform="translate(-188.000000, -38.000000)" fillRule="nonzero" fill="inherit">
                                                        <g>
                                                            <g>
                                                                <g transform="translate(188.000000, 38.000000)">
                                                                    <path d="M15.5,0 C15.776,0 16,0.224 16,0.5 L16,1.5 C16,1.776 15.776,2 15.5,2 L0.5,2 C0.224,2 0,1.776 0,1.5 L0,0.5 C0,0.224 0.224,0 0.5,0 L15.5,0 Z M15.5,4 C15.776,4 16,4.224 16,4.5 L16,5.5 C16,5.776 15.776,6 15.5,6 L0.5,6 C0.224,6 0,5.776 0,5.5 L0,4.5 C0,4.224 0.224,4 0.5,4 L15.5,4 Z M15.5,8 C15.776,8 16,8.224 16,8.5 L16,9.5 C16,9.776 15.776,10 15.5,10 L0.5,10 C0.224,10 0,9.776 0,9.5 L0,8.5 C0,8.224 0.224,8 0.5,8 L15.5,8 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                        <Link to="/settings">
                                            <button className="dropdown-item">Account Settings</button>
                                        </Link>
                                        <Link to="/chat">                                    
                                            <button className="dropdown-item">Chat</button>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <button className="dropdown-item" onClick={this.props.onClickLogout}>Logout</button>
                                    </div>
                                </div>
                                {/* <span class="status ">
                                    <svg width="100%" height="100%" viewBox="0 0 20 20" role="icon" aria-label="Online Icon" style={svgStyle}>
                                        <path class="online--icon" d="M10,0c5.519,0 10,4.481 10,10c0,5.519 -4.481,10 -10,10c-5.519,0 -10,-4.481 -10,-10c0,-5.519 4.481,-10 10,-10Zm6.19,7.18c0,0.208 -0.075,0.384 -0.224,0.53l-5.782,5.64l-1.087,1.059c-0.149,0.146 -0.33,0.218 -0.543,0.218c-0.213,0 -0.394,-0.072 -0.543,-0.218l-1.086,-1.059l-2.891,-2.82c-0.149,-0.146 -0.224,-0.322 -0.224,-0.53c0,-0.208 0.075,-0.384 0.224,-0.53l1.086,-1.059c0.149,-0.146 0.33,-0.218 0.543,-0.218c0.213,0 0.394,0.072 0.543,0.218l2.348,2.298l5.24,-5.118c0.149,-0.146 0.33,-0.218 0.543,-0.218c0.213,0 0.394,0.072 0.543,0.218l1.086,1.059c0.149,0.146 0.224,0.322 0.224,0.53Z">
                                        </path>
                                    </svg>
                                </span> */}
                            </div>
                            <ul className="nav nav-pills nav-stacked d-flex flex-column">
                            </ul>
                        </div>
                        <ChannelSection
                            {...this.props}
                            addChannel={this.props.addChannel}
                            setChannel={this.props.setChannel}
                            toggleModal={this.toggleModal.bind(this)}
                        />
                        <UserSection
                            {...this.props}
                            setUserName={this.props.setUserName}
                        />
                    </div>
                </div>
                <MessageSection
                    {...this.props}
                    addMessage={this.props.addMessage}
                    deleteMessage={this.props.deleteMessage}
                />
                <ModalMoreChannels {...this.props} onSearchChannels={this.props.onSearchChannels} show={isOpen} onClose={this.toggleModal.bind(this)} />
                {/* <ModalSettings onChangeData={this.onChangeData.bind(this)} show={isOpen} onClose={this.toggleSettingsModal.bind(this)} /> */}
                
            </div>
        )
    }
}

export default Chat;