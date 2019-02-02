import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem.js';

class ProjectPage extends Component {




componentDidMount() {
        this.displayProjects();
    };

      // Renders the entire app on the DOM
    displayProjects = () => {
          this.props.dispatch({ type: 'SET_PROJECTS'});
    };


    render() {
        return (
            <div>
                
            </div>
        );
    }
}




const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(ProjectPage);