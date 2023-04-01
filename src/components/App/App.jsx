import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    

      <Route exact path="/">
        <Feeling />
      </Route>

      <Route exact path ="/understanding">
        <Understanding />
      </Route>

    <Route exact path ="/supported">
      <Supported />
    </Route>

    <Route exact path="/comments">
      <Comments />
    </Route>

      </Router>
     
    </div>
  );
}

export default App;
