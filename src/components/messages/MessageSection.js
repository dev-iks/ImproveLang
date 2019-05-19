import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import PropTypes from 'prop-types';


class MessageSection extends Component {

  render() {
    let {activeChannel} = this.props;
    let {user} = this.props;
    return (
      <div className="messages-container card border-default">
        <div className='card-header'><strong>{activeChannel.name || 'Select A Channel'}</strong></div>
        <div className="card-body messages">
          <MessageList {...this.props} user={user} />
          <MessageForm {...this.props} />
        </div>
      </div>
    )
  }

}

MessageSection.propTypes = {
  messages: PropTypes.array.isRequired,
  activeChannel: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired,
}

export default MessageSection;