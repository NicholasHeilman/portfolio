import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem.js';

class ProjectPage extends Component {




componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECTS'});
        // this.displayProjects();
    };

      // Renders the entire app on the DOM
    // displayProjects = () => {
    //       this.props.dispatch({ type: 'FETCH_PROJECTS'});
    // };


    render() {
        return (
            <div className="container">
                
            </div>
        );
    }
}




const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(ProjectPage);