import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Search from './components/Search'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: '',
    }
  }

  getLatestImage() {
    fetch('https://xkcd.now.sh/?comic=latest')
      .then(res => res.json())
      .then(data => {
        this.setState({
          num: data.num,
          imageURL: data.img,
          alt: data.alt,
          title: data.title
        });
      })
  }

  componentDidMount() {
    this.getLatestImage();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/search">
              <Home></Home>
              <Search></Search>
            </Route>
            <Route path="/">
              <Home></Home>
              <img src={this.state.imageURL} className="latestImage" title={this.state.alt} alt={this.state.title}></img>
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

// function Search() {
//   let match = useRouteMatch();
//   return (

//   )
// }

