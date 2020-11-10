import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import soundThings from '../soundThings';
import Home from './Home';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Route path={'/'} component= {Home} />
        <Route path={"/soundThings"} component={soundThings} />
      </Router>
        </div>
       
  )
}

export default App;
