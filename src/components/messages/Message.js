import React, { Component } from 'react';
import fecha from 'fecha';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Message extends Component {

  onClick() {
    let messageId = this.props.message.id;
    this.props.deleteMessage(messageId);
  }

  render() {
    let {message, user} = this.props;
    let createdAt = fecha.parse(message.created_at, 'YYYY-MM-DD[T]HH:mm:ss'); // HH:mm:ss MM/DD/YY dddd MMM M, [at] HH:mm
    createdAt = fecha.format(createdAt, 'HH:mm:ss MM/DD/YY');
    let fr = (user.username === message.username) ? 'float-right' : '';

    return (
      <li className={'message'}>
        <div className="author">
          <strong>{message.author}</strong>
          { user.id === message.user_id ?
            <span className="dropdown">
              <span role="button" id="dropdownOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={this.onClick.bind(this)}>Delete</a>
              </div>
            </span>
            : ''
          }
          <i className="timestamp">{createdAt}</i>
        </div>
        <div className="body">{message.body}</div>
      </li>
    )
  }

}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;