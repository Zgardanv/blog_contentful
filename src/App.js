import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import { client } from './client';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from './components/Weather';
import Home from './components/Home';

export default class App extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        this.setState({
          articles: response.items
        })
      })
      .catch(console.error)
  }

  render() {

    return (
      <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path='/' exact  >
                <Home posts={this.state.articles} />
              </Route>
              <Route path='/weather'>
                <Weather />
              </Route>
            </Switch>
          </Router>
      </div>
    );
  }
}

// export default App;
