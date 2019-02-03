import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem.js';

class ProjectPage extends Component {

    componentDidMount(){
        this.getProject();
    }

    getProject(){
        const action = {type: 'FETCH_PROJECT' };
        this.props.dispatch(action);
    }
    projectDisplay = () => {
        return (
            this.props.projects.map((project, i) => {
                return <ProjectItem key={i} project={project} />
            })
        )
    }

  

    render() {
        return (
            <div className="container">
                {this.projectDisplay()}
            </div>
        )
    }
}




const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(ProjectPage);