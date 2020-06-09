import React from 'react';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AppMenu from './pages/Menu.page';

const App = function (props) {
  return (
    <React.Fragment>
      <TopBar />
      <Router>
        <Switch>
          <Route path="/menu" component={AppMenu} />
          <Redirect to="/menu" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
