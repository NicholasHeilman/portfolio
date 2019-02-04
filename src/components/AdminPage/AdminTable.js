import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class AdminTable extends Component {

   deleteProject = () => {
       const action= { type: 'REMOVE_PROJECT',
                    payload: {projectId: this.props.project.id}};
        this.props.dispatch(action);
   }

    render() {
        return (
    
                        <TableRow >
                            <TableCell align="right">{this.props.project.name}</TableCell>
                            <TableCell align="right"><Button onClick={this.deleteProject}>Delete</Button></TableCell>
                        </TableRow>
                        
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminTable);