import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrainsPage from '../../components/AllTrainsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllTrainsPage} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;