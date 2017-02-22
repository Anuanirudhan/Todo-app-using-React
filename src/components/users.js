import React from 'react';
import { Link } from 'react-router';
export default class Users extends React.Component {
  render() {
    return (
      <div className="home-page">
        <ul className="user-list">
          <li><Link to="users/2">Michael</Link></li>
          <li><Link to="users/1">Ryan</Link></li>
          <li><Link to="users/3">Dan</Link></li>
        </ul>
      </div>
    )
  }
};
