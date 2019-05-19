/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Channel extends Component {
    
    onClick(e) {
        e.preventDefault()
        const {setChannel, channel} = this.props
        setChannel(channel)
    }
    
    render() {
        const {channel, activeChannel} = this.props
        const active = channel === activeChannel ? 'activeChannel' : ''

        return (
            <li className={active}>
                <a href="#" onClick={this.onClick.bind(this)}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default Channel; 
