import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MyPosts from "./MyPosts";
import EditPost from './EditPost';

class MyPost extends Component {

    state = {
        showform: false
    }

    toggleShow = () => {
        this.setState({showform: !this.state.showform})
    }
    
    render(){
        return(
            <div className= "n">
                <div>
                    <br/>
                    <h5> Title: {this.props.post.title} </h5>
                    <p> Description: {this.props.post.body} </p>
                    <p> Cost: ${this.props.post.cost}</p>
                    <img style={{ width: "250px" }} src={this.props.post.pic} />
                    <br/>
                </div>
                <button onClick={() => this.props.handleDelete(this.props.post)}>Delete</button>
                <button onClick={()=> this.toggleShow()}>Edit</button>
                {this.state.showform ? <EditPost selectedPost={this.props.post}/> : null}
            </div>
        )
    }

}

export default MyPost;