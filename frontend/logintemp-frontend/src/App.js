import React, { Component } from "react";
import "./App.css";
import SignUp from "./signup";
import Login from "./login";
import Home from "./home";
import AuthDemo from "./authdemo";
import Posts from "./Posts";
import MakeAPost from "./MakeAPost";
import MyPosts from "./MyPosts"


import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Search from "./Search";


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    user: {},
    loggedIn: false,
    posts: []
  };

  // componentDidMount() {
  //   fetch('http://localhost:3000/posts')
  //     .then(response => response.json())
  //     .then(posts => this.setState({ posts }));
  // }

  setCurrentUser = (user) => {
    this.setState({
      user: user,
      loggedIn: true,
    });
  };

  logOut = () => {
    this.setState({ user: {}, loggedIn: false });
    localStorage.token = "";
  };

  displayGreeting = () => {
    if (this.state.loggedIn) {
      return (
        <h1 className="greeting-text">
          Welcome back!
        </h1>
      );
    } else {
      return (
        <div className="please-log-in">
          <h3>Sign in Below</h3>
        </div>
      );
    }
  };

//Keep User Signed In
  componentDidMount = () => {
    fetch("http://localhost:3000/auto_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.token }),
    })
      .then((r) => r.json())
      .then((user) => this.setCurrentUser(user));
      this.getPost();
  };

  // tokenLogin = (token) => {
  //   fetch("http://localhost:3000/auto_login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ token: token }),
  //   })
  //     .then((r) => r.json())
  //     .then((user) => this.setCurrentUser(user));
  // };


//Render Posts
  getPost = () => {
    fetch(`http://localhost:3000/posts`)
      .then(r => r.json())
      .then(posts => this.setState({ posts }))
  }

  // componentDidMount() {
  //   this.getPost()
  // }


  // handleSearchChange = event => {
  //   this.setState({ searchTerm: event.target.value })
  //   // console.log(event.target.value);
  // }

  handleSubmit = (e) => {
    //preventDefault because form
    e.preventDefault();
    //format our data 
    let newPost = {
      title: e.target.title.value,
      pic: e.target.pic.value,
      body: e.target.body.value, 
      cost: e.target.cost.value
    };
    //log to make sure our data 'looks' ok
    console.log("I be submitted", e.target);

    //update state 

    this.setState({
      posts: [...this.state.posts, newPost]
    })

    //clear our form
    e.target.reset()
  };

  render() {
    console.log(this.state.loggedIn)
    const {} = this.state
    return (
    <div>
          {/* <Navbar variant="light">
            <Navbar.Brand href="/" className="Nav-Brand" >Yoelslist</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/posts">Posts</Nav.Link>
              <Nav.Link href="/makeapost">Make a Post</Nav.Link>
              {this.state.loggedIn ? (
              <Nav.Link onClick={this.logOut}>Logout</Nav.Link>
              ) : null}
            </Nav>
          </Navbar> */}

          <Navbar fixed="top" bg="primary" variant="dark">
              <Navbar.Brand href="/">Yoelslist</Navbar.Brand>
              <Nav className="mr-auto">
              <Nav.Link href="/posts">Posts</Nav.Link>
              <Nav.Link href="/makeapost">Create A Post</Nav.Link>
              {this.state.loggedIn ? (
              <Nav.Link onClick={this.logOut}>Logout</Nav.Link>
              ) : null}
            </Nav>
            
          </Navbar>
      


      <div className="main-div">
        <h1 className="title">Yoelslist</h1>
        <BrowserRouter>
        {/* <Search onChange={this.handleSearchChange}/> */}
          {/* <Link className="pretty-link" to="/">
            Home
          </Link> */}
          {/* <br />
          <br /> */}
          <br />
          <br />
          <br />
          {/* <Link className="pretty-link" to="/login">
          <button class="button" >
            Login
            </button>
          </Link>
          <br />
          <br /> */}

          {this.state.loggedIn ? (
            null
          ) : <Link className="pretty-link" to="/login">
          <button class="button" >
            Login
            </button>
          </Link>}

          {this.state.loggedIn ? (
            null
          ) :  <Link className="pretty-link" to="/signup">
          <button class="button"  >
          SignUp
          </button>
        </Link>}



          {/* <Link className="pretty-link" to="/signup">
            <button class="button"  >
            SignUp
            </button>
          </Link> */}
          <br />
          {this.state.loggedIn ? (
            <Link className="pretty-link" to="/myposts">
              <br />
              <button >My Posts</button>
            </Link>
          ) : null}
          <br />
          {this.state.loggedIn ? (
            <span className="pretty-link">
              <br />
              <button onClick={this.logOut}>Log Out</button>
            </span>
          ) : null}
          
          {this.state.loggedIn ? (
            <span className="pretty-link">
              <br />
              {/* <Link to='/posts'>
              <button >Posts</button>
              </Link> */}
            </span>
          ) : null}
          <br />
          {/* <Link className="pretty-link" to="/auth">
            Auth Check{" "}
            {!this.state.loggedIn
              ? "(Works better if you're logged in!)"
              : "(Try it now you're logged in!)"}
          </Link>{" "} */}
          <br />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              {this.state.loggedIn ? (
                <Redirect to="/" />
              ) : (
                <Login setCurrentUser={this.setCurrentUser} />
              )}
            </Route>

            {/* <Route exact path="http://localhost:3001/posts">
              {this.state.loggedIn ? <Redirect to="/posts" /> : <MakeAPost />}
            </Route> */}
            

            <Route exact path="/posts" render={(routerProps)=>
                <Posts {...routerProps} 
                props={this.state.props} 
                user={this.state.user.id} 
                posts={this.state.posts}
              />
              }>
            </Route>

            <Route exact path="/myposts" render={(routerProps)=>
                <MyPosts {...routerProps} 
                props={this.state.props} 
                user={this.state.user.id} 
                posts={this.state.posts}
              />
              }>
            </Route>

            <Route exact path="/makeapost" render={(routerProps)=>
                <MakeAPost {...routerProps}
                handleAdd={this.state.handleAdd} 
                props={this.state.props} 
                user={this.state.user} 
                posts={this.state.posts}
                handleSubmit={this.state.handleSubmit}
              />
              }>
            </Route>

            {/* <Route exact path="http://localhost:3000/posts">
              {this.state.loggedIn ? <Redirect to="/posts" /> : <Posts />}
            </Route> */}

            <Route exact path="/signup">
              {this.state.loggedIn ? <Redirect to="/" /> : <SignUp />}
            </Route>

            <Route exact path="/auth">
              <AuthDemo loggedIn={this.state.loggedIn} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    );
  }
}

export default App;



