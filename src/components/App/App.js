import React, { Component } from 'react';
import './App.css';
import ProjectPage from '../ProjectPage/ProjectPage.js';
import { connect } from 'react-redux';
import {HashRouter as Router, Route } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage.js';


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
      <Router>
        <div>
          <Route exact path="/" component={ProjectPage} />
          <Route exact path="/Admin" component={AdminPage} />
        </div>
      </Router>
        
      </div>
    );
  }
}

export default connect()(App);
