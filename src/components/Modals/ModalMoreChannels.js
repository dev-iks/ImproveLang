import React, {Component} from 'react';
import ChannelsResult from '../search/ChannelsResult';
import PropTypes from 'prop-types'

class ModalMoreChannels extends Component {

    onSubmit(e) {
        e.preventDefault();
        let moreChannels = this.props.moreChannels.splice(0, this.props.moreChannels.length);
        this.setState({ moreChannels });
        let node = this.refs;
        this.props.onSearchChannels(node.search.value);
        node.search.value = '';
    }

    render() {
        if(!this.props.show) {
            return null;
        }
        let toggleShow = this.props.show ? 'show' : '';
        let {moreChannels} = this.props;

        return (
            <>
                <div className={'modal fade ' + toggleShow} tabIndex="-1" style={styleBlock} id="moreChannelsModal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title f-white">More Channels</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div className="modal-body col-md-10">
                                <form onSubmit={this.onSubmit.bind(this)}>
                                    <div className="form-group">
                                        <input ref="search" autoFocus={true} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </form>
                                {
                                    moreChannels.map(channel => {
                                        return (
                                            <>
                                                <ChannelsResult key={channel.id} channelName={channel.name} channelPurpose={channel.purpose} />
                                            </>
                                        )
                                    })
                                }
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

ModalMoreChannels.propTypes = {
    show: PropTypes.bool,
    moreChannels: PropTypes.array.isRequired
}


export default ModalMoreChannels;