import React from 'react';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MenuPage from './pages/Menu.page';
import AnglesPage from './pages/Angles.page';

const App = function (props) {
  return (
    <React.Fragment>
      <TopBar />
      <Router>
        <Switch>
          <Route path="/menu" component={MenuPage} />
          <Route path="/angles" component={AnglesPage} />
          <Redirect to="/menu" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
