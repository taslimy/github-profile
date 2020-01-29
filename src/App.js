import React from "react";
import axios from "axios";

import { removeSpaces } from "./util/index";

import Form from "./component/Form";
import GitHub from "./component/GitHub";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      getuserRepo: {}
    };
  }

  getUserInfo = e => {
    const name = removeSpaces(e.target.name.value);
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${name}`)
      .then(res => {
        this.setState({
          user: {
            username: res.data.login,
            avatar_url: res.data.avatar_url,
            html_url: res.data.html_url,
            name: res.data.name,
            bio: res.data.bio,
            location: res.data.location,
            public_repos: res.data.public_repos,
            followers: res.data.followers,
            following: res.data.following
          }
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(`https://api.github.com/users/${name}/repos?per_page=100`)
      .then(res => {
        console.log(res.data);
        this.setState({
          userRepo: {
            ...res.data
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <h1>Search GitHub name homie</h1>
        <Form loadUser={this.getUserInfo} />
        <GitHub user={user} />
      </div>
    );
  }
}

export default App;
