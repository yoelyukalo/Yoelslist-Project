import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditPost extends Component {
    

    EditPost = (e, selectedPost) => {
        e.preventDefault();
        // e.target.reset();
    
        // const { title, cost, body };
        // const post = { title, cost, body };

        let editPost = {
          title: e.target.title.value,
          pic: e.target.pic.value,
          body: e.target.body.value, 
          cost: e.target.cost.value,
        };
        console.log(e.target.title.value, ", this is editPost");
        fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify( editPost ),
        })
        //   .then((r) => r.json())
        //   .then((response) => {

        //     console.log(response);
            // localStorage.token = response.jwt;
            // this.props.setCurrentUser(response.user);
          // });
      };

    render(){
        return(
            <div className = "CreatePost">
              <br />
              <h1>Edit Your Post</h1>
                <form onSubmit={(e) => this.EditPost(e, this.props.selectedPost)}>
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
                    {/* <input type="file"
                    name="filepic"
                    placeholder="Picture Upload"
                    /> */}
                    <br />
                    <button type="submit">Edit Post</button>
                    </form>
                    <br />
                    <br />
            </div>
        );
    }
}

export default EditPost;