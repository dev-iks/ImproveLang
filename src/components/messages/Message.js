import React, { Component } from 'react';
import fecha from 'fecha';
import PropTypes from 'prop-types';

class Message extends Component {

  render() {
    let {message} = this.props
    let createdAt = fecha.parse(message.created_at, 'YYYY-MM-DD[T]HH:mm:ss') // HH:mm:ss MM/DD/YY dddd MMM M, [at] HH:mm
    createdAt = fecha.format(createdAt, 'HH:mm:ss MM/DD/YY')
    return (
      <li className='message'>
        <div className="author">
          <strong>{message.author}</strong>
          <i className="timestamp">{createdAt}</i>
        </div>
        <div className="body">{message.body}</div>
      </li>
    )
  }

}

Message.propTypes = {
  message: PropTypes.object.isRequired
};

export default Message;