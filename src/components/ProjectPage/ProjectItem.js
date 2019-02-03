import React, { Component } from 'react';
import { connect } from 'react-redux';



class ProjectItem extends Component {

    imageDisplay = () => {
        if (this.props.project.thumbnail === null) {
            return <img src="./images/goat_small.jpg" alt="" />;
        } else {
            return <img src={this.props.project.thumbnail} alt="screenshot" />;
        }  
    }

    render() {
        return (
            <div>
                <div className="card">
                    <br />
                    {this.imageDisplay()}
                    <span className="projectSpan">
                        <h4>{this.props.project.name}</h4>
                        <p>{this.props.project.description}</p>
                        <a href={this.props.project.github}>GitHub</a>
                        {this.props.project.website &&
                            <a href={this.props.project.website}>Website</a>}
                        <p>tag: {this.props.project.tag_name}</p>
                        {/* <img src={this.props.project.thumbnail} alt="" /> */}
                    </span>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(ProjectItem);