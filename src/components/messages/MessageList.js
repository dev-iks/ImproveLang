import React, { Component } from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends Component {

  render() {
    let {user} = this.props;

    return (
      <ul>{
        this.props.messages.map( message => {
          return(
            <Message deleteMessage={this.props.deleteMessage} key={message.id} message={message} user={user} />
          )
        })
      }</ul>
    )
  }

}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default MessageList