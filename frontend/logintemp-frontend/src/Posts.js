import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import EachPosts from './EachPosts'

function Posts(props){
    
        return(
            <div className= "n">
                <h1>All Posts</h1>
                {props.posts.map(post => <EachPosts key={post.id} post={post}/>)}

            </div>
        )

}

export default Posts;