import React, { Component } from 'react';
import { connect } from 'react-redux';



class AdminForm extends Component {
    constructor(props) {
        super();
        this.state ={
            name: '',
            github: '',
            website: '',
            description: '',
            date_complete: '',
            tag_id: '',
            thumbnail: '',
        
        }
    }

    // handle change on Name Input
    projectNameAdd = (event) => {
        this.setState({
            name: event.target.value
        })
    }

     // handle change on GitHub Input
    githubAdd = (event) => {
        this.setState({
            github: event.target.value
        })
    }

     // handle change on Website Input
    websiteAdd = (event) => {
        this.setState({
            website: event.target.value
        })
    }

     // handle change on Description Input
     descriptionAdd = (event) => {
        this.setState({
            description: event.target.value
        })
    }

     // handle change on Date_Complete Input
     dateAdd = (event) => {
        this.setState({
            date_complete: event.target.value
        })
    }    

     // handle change on Tag_Id Input
     tagAdd = (event) => {
        this.setState({
            tag_id: event.target.value
        })
    }

     // handle change on Image Thumbnail Input
     imageAdd = (event) => {
        this.setState({
            thumbnail: event.target.value
        })
    }

    submitBtn = () => {
        console.log(this.state);
        const action = {type: 'POST_PROJECT',
                        payload: this.state };
        this.props.dispatch(action);
    }
    render() {
        return (
            <div>
                 
                <h3>Add a Project</h3>
             
                    <input type="text"  placeholder="Project Name" onChange={this.projectNameAdd}/>
                    <input type="url" name="github" placeholder="GitHub URL" onChange={this.githubAdd} />
                    <input type="url" name="website" placeholder="Website URL (optional)" onChange={this.websiteAdd} />
                    <input type="text" name="description" placeholder="Description" onChange={this.descriptionAdd} />
                    <input type="date" name="date_complete" onChange={this.dateAdd} />
                    <select  name="tag_id" onChange={this.tagAdd} >
                                <option>Select Tag</option>
                                <option value="1">React</option>
                                <option value="2">jQuery</option>
                                <option value="3">Node</option>
                                <option value="4">SQL</option>
                                <option value="5">Redux</option>
                                <option value="6">HTML</option>
                    </select>
                    <input type="file" name="thumbnail" placeholder="Image" onChange={this.imageAdd} />
                    <button type="submit" onClick={this.submitBtn}>Submit</button>
                
                    
            </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => {
    return { projects: reduxStore.projects }
    };

export default connect(mapStoreToProps)(AdminForm);