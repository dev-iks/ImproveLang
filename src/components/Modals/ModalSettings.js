import React, {Component} from 'react';
import generalSvg from '../../assets/img/svg/general-settings.svg';

class ModalSettings extends Component {

    onClickSubmit(e) {
        let form = this.refs;
        let username = form.username.value; 
        this.props.onChangeData(username);
    }

    render() {
        if(!this.props.show) {
            return null;
        }
        let toggleShow = this.props.show ? 'show' : '';

        return (
            <>
                <div className={'modal fade ' + toggleShow} tabIndex="-1" style={styleBlock} id="settingsModal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title f-white">Account Settings</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div className="modal-body">
                                <div className="settings-table">
                                    <div className="settings-links">
                                        <div>
                                            <ul id="tabList" className="nav nav-pills nav-stacked">
                                                <li id="generalLi" className="active">
                                                    <button id="generalButton" className="cursor--pointer style--none f-white">
                                                        <img src={generalSvg} className="iconStyle" alt="general"/>
                                                        <span className="ml-3" style={{fontWeight: "800", fontSize: "17px"}}>General</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="settings-content minimize-settings">
                                        <div>
                                            <div id="generalSettings">
                                                <div className="user-settings">
                                                    <h3 id="generalSettingsTitle" className="tab-header">
                                                        <span>General Settings</span>
                                                    </h3>     
                                                    <div className="form-group">
                                                        <label htmlFor="username">Username</label>
                                                        <input type="text" ref="username" className="form-control" name="username" id="username" />
                                                        <button type="submit" className="btn btn-primary mt-3" onClick={this.onClickSubmit.bind(this)}>Submit</button>
                                                    </div>
                                                </div>
                                                <div className="divider-dark"></div>
                                            </div>
                                        </div>



                                        {/* <div className="row">
                                            <div className="col-3">
                                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">General settings</a>
                                                
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="tab-content" id="v-pills-tabContent">
                                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                        <div className="form-group mb-2">
                                                            <label for="username" className="sr-only">Username</label>
                                                            <input type="text" readonly className="form-control-plaintext" id="username" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </>
        )
    }
    

}

const styleBlock = {
    display: "block",
    paddingRight: "15px"
}


export default ModalSettings;