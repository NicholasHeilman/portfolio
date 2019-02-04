import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from './AdminTable.js';
import AdminForm from './AdminForm.js';



class AdminPage extends Component {


    componentDidMount(){
        this.getProject();
    }

    getProject(){
        const action = {type: 'FETCH_PROJECT' };
        this.props.dispatch(action);
    }

    //Display projects in a Table on the Admin page
    projectDisplayTable = () => {
        return (
            this.props.projects.map((project, i) => {
                return <AdminTable key={i} project={project} />
            })
        )
    }


    render() {
        return (
            
            <div className="adminPage">
                <AdminForm />
                {this.projectDisplayTable()}
            </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminPage);