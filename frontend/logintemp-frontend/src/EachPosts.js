import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class EachPosts extends Component {

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
                    <br/>
                    <br/>
                </div>
                {/* <button onClick={() => this.props.handleDelete(this.props.airline)}>delete</button> */}
            </div>
        )
    }

}

export default EachPosts;