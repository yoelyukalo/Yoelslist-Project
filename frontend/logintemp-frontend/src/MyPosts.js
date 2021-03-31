import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import EachPosts from './EachPosts';
import MyPost from './MyPost';

class MyPosts extends Component {

  handleDelete = (selectedPost) => {
    console.log('delete function in App')
    console.log(selectedPost)

    // this.setState({
    //   airlines: this.state.airlines.filter((airline) => airline != selectedAirline)
    // })

    //not sure how to make id specific to post
    fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        })
  }

  // UsersPosts = (props) => {
  //   allposts: [],
  //   this.props.posts
  // }
    

    updatePost = (e) => {
        e.preventDefault();
        e.target.reset();
    
        // const { title, cost, body };
        // const post = { title, cost, body };

        let updatedPost = {
          title: e.target.title.value,
          pic: e.target.pic.value,
          body: e.target.body.value, 
          cost: e.target.cost.value,
          user_id: this.props.user.id
        };

        fetch(`http://localhost:3000/posts/${this.props.post.id}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify( updatedPost ),
        })


          // .then((r) => r.json())
          // .then((response) => {

          //   console.log(response);
          //   // localStorage.token = response.jwt;
          //   // this.props.setCurrentUser(response.user);
          // });
      };

      // Logic needed to render posts that user created
      // this.props.posts.user.id == this.props.user.id

    render(){
        return(
          <div className= "myposts">
                <h1>My Posts</h1>
                {this.props.posts.filter(things => things.user_id == this.props.user).map(post => <MyPost key={post.id} post={post} user={this.props.user} updatePost={this.updatePost} handleDelete={this.handleDelete}/>)}

            </div>
        );
    }
}

export default MyPosts;