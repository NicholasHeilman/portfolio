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
                            <TableCell align="right"><Button onClick={this.deleteProject}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg></Button></TableCell>
                        </TableRow>
                        
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminTable);