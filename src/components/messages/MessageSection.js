import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import PropTypes from 'prop-types';


class MessageSection extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    let {activeChannel} = this.props;
    let {user} = this.props;
    return (
      <div className="messages-container card border-default">
        <div className='card-header'><strong>{activeChannel.name || 'Select A Channel'}</strong></div>
        <div className="card-body messages" ref={el => {this.messagesEnd = el}}>
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
  deleteMessage: PropTypes.func.isRequired,
}

export default MessageSection;