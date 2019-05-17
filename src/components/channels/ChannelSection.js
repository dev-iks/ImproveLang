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

    render() {
        return (
            <div className='support card border-primary'>
                <div className="card-header bg-primary text-white p-2">
                    <strong>Channels</strong>
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
