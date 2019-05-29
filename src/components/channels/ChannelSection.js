import React, { Component } from 'react';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';
import PropTypes from 'prop-types';

class ChannelSection extends Component {

    addChannel(channelName) {
        let {channels} = this.props
        channels.push({name: channelName})
        this.setState({
            channels: channels
        })
    }

    onClickMore(e) {

    }

    render() {
        return (
            <div className='support card border-primary'>
                <div className="card-header d-flex bg-primary text-white p-2">
                    <div className="col-md-8">
                        <strong>Channels</strong>
                    </div>
                    <div className="col-md-4">
                        <div data-toggle="modal" onClick={this.props.toggleModal} data-target="#moreChannelsModal" >
                            <button id="sidebarChannelsMore" onClick={this.onClickMore.bind(this)} className="nav-more cursor--pointer style--none btn--block">
                                <span className="f-white">More...</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='card-body pb-0 channels'>
                    <ChannelList {...this.props}/>
                    <ChannelForm {...this.props}/>
                </div>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelSection;
