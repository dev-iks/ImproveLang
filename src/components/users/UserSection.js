import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import PropTypes from 'prop-types';

class UserSection extends Component {

  render() {
    return (
      <div className='support card border-primary'>
        <div className="card-header bg-primary p-2 text-white">
          <strong>Users</strong>
        </div>
        <div className='card-body pb-0 users'>
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }

}

UserSection.propTypes = {
  users: PropTypes.array.isRequired,
  setUserName: PropTypes.func.isRequired
}

export default UserSection