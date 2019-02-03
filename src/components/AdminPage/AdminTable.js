import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class AdminTable extends Component {

   

    render() {
        return (
            <div>
                <div className="table">
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.project.name}</td>
                                <td><Button onClick={this.deleteProject}>Delete</Button></td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminTable);