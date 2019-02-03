import React, { Component } from 'react';
import './App.css';
import ProjectPage from '../ProjectPage/ProjectPage.js';
import { connect } from 'react-redux';
// import {HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount(){
    
    this.getProject()
  }
  
  getProject(){
    this.props.dispatch({ type: 'FETCH_PROJECT' });
  }
      
  
  render() {
    return (
      <div className="App">
        <p>This is Where the DATA goes</p>
        <ProjectPage />
      </div>
    );
  }
}

export default connect()(App);
