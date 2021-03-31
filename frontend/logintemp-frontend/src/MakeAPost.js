import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class MakePost extends Component {
    

    createPost = (e) => {
        e.preventDefault();
        // e.target.reset();
    
        // const { title, cost, body };
        // const post = { title, cost, body };

        let newPost = {
          title: e.target.title.value,
          pic: e.target.pic.value,
          body: e.target.body.value, 
          cost: e.target.cost.value,
          user_id: this.props.user.id
        };
    console.log(e.target.title.value, ", this is newpost");
        fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify( newPost ),
        })
          .then((r) => r.json())
          .then((response) => {

            console.log(response);
            // localStorage.token = response.jwt;
            // this.props.setCurrentUser(response.user);
          });
      };

    render(){
        return(
            <div className = "CreatePost">
              <h1>Create A Post</h1>
                <form onSubmit={(e) => this.createPost(e)}>
                    <br />
                    <input type="text"
                    name="title"
                    placeholder="title"
                    // onChange={this.handleChange}
                    />
                    <br />
                    <input type="number"
                    name="cost"
                    placeholder="cost"
                    />
                    <br />
                    <input type="text"
                    name="body"
                    placeholder="body(description)"
                    />
                    <br />
                    <input type="text"
                    name="pic"
                    placeholder="Picture Link"
                    />
                    <br />
                    <input type="file"
                    name="filepic"
                    placeholder="Picture Upload"
                    />
                    
                    <br />
                    <button type="submit">Create Post</button>
                    </form>
                    <br />
                    <br />
            </div>
        );
    }
}

export default MakePost;