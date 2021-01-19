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
      <div className="App">
      <header className="App-header">
        <Follow />
      </header>
    </div>
    )
  }
}

export default App;
