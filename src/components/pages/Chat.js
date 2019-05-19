import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import ChannelSection from '../channels/ChannelSection';
import MessageSection from '../messages/MessageSection';
import UserSection from '../users/UserSection';
import ModalSettings from "../Modals/ModalSettings";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    onClick(e) {

        
    }

    onChangeData(data) {
        console.log(data);
    }

    toggleSettingsModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { user } = this.props;
        if (this.props.redirect) {
            this.setState({redirect: false});
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
                                <div onClick={this.onClick.bind(this)}>
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
                                        <button className="dropdown-item" data-toggle="modal" data-target="#settingsModal" onClick={this.toggleSettingsModal.bind(this)}>Account Settings</button>
                                        <button className="dropdown-item">Another action</button>
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
                                {/* <li>
                                    <h4 id="publicChannel">
                                        <span>channels</span>
                                        <button className="add-channel-btn cursor--pointer style--none">+</button>
                                    </h4>
                                </li>
                                <li>
                                    <a href="" className="sidebar-item">
                                        <span className="icon icon__globe">
                                            <svg width="13px" height="13px" viewBox="0 0 14 14" role="icon" aria-label="Channel Icon">
                                                <g stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
                                                    <g transform="translate(-115.000000, -147.000000)" fillRule="nonzero" fill="inherit">
                                                        <g transform="translate(95.000000, 0.000000)">
                                                            <g transform="translate(20.000000, 113.000000)">
                                                                <g transform="translate(0.000000, 34.000000)">
                                                                    <path d="M10.409,0.893375 C9.40275,0.329875 8.24075,0.00875 7,0 C3.13075,0 0,3.140375 0,7 C0,10.521875 2.594375,13.42775 5.97625,13.93 C6.314875,13.974625 6.6535,14 7,14 C8.24075,14 9.40275,13.678875 10.409,13.1145 C12.551875,11.918375 14,9.6285 14,7 C13.99125,4.3715 12.551875,2.090375 10.409,0.893375 Z M11.554375,4.375 L9.431625,4.375 C9.302125,3.5 9.10875,2.736125 8.86725,2.085125 C10.003875,2.519125 10.9515,3.5 11.554375,4.375 Z M6.941375,1.73775 C6.960625,1.736875 6.979875,1.73425 7,1.73425 C7.020125,1.73425 7.039375,1.736875 7.058625,1.73775 C7.340375,2.172625 7.697375,3.5 7.92225,4.375 L6.07775,4.375 C6.302625,3.5 6.659625,2.172625 6.941375,1.73775 Z M1.81475,7.875 C1.7675,7.875 1.73425,7.29925 1.73425,7 C1.73425,6.70075 1.764875,6.125 1.813,6.125 L4.396875,6.125 C4.384625,6.125 4.375,6.7025 4.375,7 C4.375,7.2975 4.384625,7.875 4.396875,7.875 L1.81475,7.875 Z M4.354875,11.54475 C4.346125,11.54475 4.337375,11.54475 4.337375,11.536 C3.548125,11.07575 2.893625,10.5 2.436875,9.625 L4.568375,9.625 C4.697875,10.5 4.890375,11.262125 5.131875,11.91225 C4.8615,11.81075 4.599875,11.692625 4.354875,11.54475 Z M4.568375,4.375 L2.443875,4.375 C3.045875,3.5 3.994375,2.517375 5.131875,2.083375 C4.89125,2.734375 4.697875,3.5 4.568375,4.375 Z M7.0595,12.26225 C7.039375,12.26225 7.020125,12.26575 7,12.26575 C6.979875,12.26575 6.960625,12.26225 6.9405,12.26225 C6.65875,11.8265 6.302625,11.375 6.07775,9.625 L7.921375,9.625 C7.697375,11.375 7.34125,11.8265 7.0595,12.26225 Z M8.11125,7.875 L5.88875,7.875 C5.873875,7.875 5.8625,7.30625 5.8625,7 C5.8625,6.69375 5.873875,6.125 5.88875,6.125 L8.11125,6.125 C8.126125,6.125 8.1375,6.69375 8.1375,7 C8.1375,7.30625 8.126125,7.875 8.11125,7.875 Z M10.409,11.0075 C10.13075,11.242 9.828,11.45025 9.506875,11.631375 C9.30125,11.74075 9.086875,11.839625 8.8655,11.923625 C9.107,11.270875 9.30125,10.5 9.431625,9.625 L11.557875,9.625 C11.25425,10.5 10.8675,10.618125 10.409,11.0075 Z M9.603125,7.875 C9.615375,7.875 9.625,7.2975 9.625,7 C9.625,6.7025 9.615375,6.125 9.603125,6.125 L12.186125,6.125 C12.235125,6.125 12.26575,6.70075 12.26575,7 C12.26575,7.29925 12.233375,7.875 12.18525,7.875 L9.603125,7.875 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="sidebar-item__name">
                                            <span>Town Square</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <button id="sidebarChannelsMore" className="nav-more cursor--pointer style--none btn--block">
                                        <span>More...</span>
                                    </button>
                                </li> */}
                            </ul>
                        </div>
                        <ChannelSection
                            {...this.props}
                            addChannel={this.props.addChannel}
                            setChannel={this.props.setChannel}
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
                />
                <ModalSettings onChangeData={this.onChangeData.bind(this)} show={this.state.isOpen} onClose={this.toggleSettingsModal.bind(this)} />
            </div>
        )
    }
}

export default Chat;