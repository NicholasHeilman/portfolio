import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AdminTableRow from './AdminTableRow.js';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AdminTable extends Component {

   deleteProject = () => {
       const action= { type: 'REMOVE_PROJECT',
                    payload: {projectId: this.props.project.id}};
        this.props.dispatch(action);
   }

    render() {
        return (
    
                <Table className="AdminTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Project</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        <TableRow >
                            <TableCell align="right">{this.props.project.name}</TableCell>
                            <TableCell align="right"><Button onClick={this.deleteProject}>Delete</Button></TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
                       
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminTable);