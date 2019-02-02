import React, { Component } from 'react';
import { connect } from 'react-redux';



class ProjectItem extends Component {

    componentDidMount() {
        this.getProject();
    };

      // Renders the entire app on the DOM
    getProject = () => {
          this.props.dispatch({ type: 'FETCH_PROJECT'});
    };



    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(ProjectItem);