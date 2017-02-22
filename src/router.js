import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './components/mainLayout';
import SearchLayout from './components/searchLayout';
import Home from './components/home';
import Users from './components/users';
import UserList from './components/userList';
import Widgets from './components/widgets';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
    </Route>
    <Route path="users">
      <Route component={SearchLayout}>
        <IndexRoute component={Users} />
      </Route>
      <Route path=":userId" component={UserList} />
    </Route>
    <Route path="widgets">
      <Route component={SearchLayout}>
        <IndexRoute component={Widgets} />
      </Route>
      <Route path=":userId" component={UserList} />
    </Route>

  </Router>
);
