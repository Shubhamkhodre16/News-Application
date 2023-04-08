// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize=16;
  render() {
    return (
      <>
      <Router>
      
        
        <Navbar/>
        <div>
        <Routes>
          <Route exact path="/Business"element={<News key="Business" pageSize={this.pageSize} country="in" category="Business" />}/>
          <Route exact path="/General"element={<News key="General" pageSize={this.pageSize} country="in" category="General" />}/>
          <Route exact path="/Entertainment"element={<News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}/>
          <Route exact path="/Sports"element={<News key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}/>
          <Route exact path="/Health"element={<News key="Health" pageSize={this.pageSize} country="in" category="Health" />}/>
          <Route exact path="/Science"element={<News key="Science" pageSize={this.pageSize} country="in" category="Science" />}/>
          <Route exact path="/Technology"element={<News key="Technology" pageSize={this.pageSize} country="in" category="Technology" />}/>
          </Routes>
         
      </div>
      </Router>
      </>
    ) 
  }
}

