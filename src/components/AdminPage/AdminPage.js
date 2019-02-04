import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from './AdminTable.js';
import AdminForm from './AdminForm.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';




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
                <Table className="AdminTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Project</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.projectDisplayTable()}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminPage);