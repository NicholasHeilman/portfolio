import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from './AdminTable.js';



class AdminPage extends Component {


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
                return <AdminTable key={i} project={project} />
            })
        )
    }


    render() {
        return (
            <div className="adminTable">
                {this.projectDisplay()}
            </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminPage);