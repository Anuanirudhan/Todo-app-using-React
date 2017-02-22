import React from 'react';
import { Link } from 'react-router';
export default class SearchLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="secondary-header">ssssssssssss</header>
        <aside className="secondary-aside">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/users" activeClassName="active">Users</Link></li>
            <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
    }
}
