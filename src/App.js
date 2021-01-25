import logo from './logo.svg';
import './App.css';
//import { ReactComponent } from '*.svg';
import axios from 'axios';
import React from 'react';
import Follow from './Follow.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const TWITCH_SECRET = '62y8kjf7gtvmrt15a5g4y824z41yyu'



class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">User Input</Link>
            </li>
            <li>
              <Link to="/follows">Follows</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/follows">
            <div className="App">
              <header className="App-header">
                <Follow />
              </header>
            </div>
            </Route>
            <Route path="/">
              <div className="App">
                <header className="App-header">
                  <Follow />
                </header>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
