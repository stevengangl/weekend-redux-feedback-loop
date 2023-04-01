import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Header from '../Header/Header';

function App() {

  return (
    <div className='App'>
      <Router>

        <Route exact path="/">
          <Header />
          <Feeling />
        </Route>

        <Route exact path="/understanding">
          <Header />
          <Understanding />
        </Route>

        <Route exact path="/supported">
          <Header />
          <Supported />
        </Route>

        <Route exact path="/comments">
          <Header />
          <Comments />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/success">
          <Success />
        </Route>

      </Router>

    </div>
  );
}

export default App;
