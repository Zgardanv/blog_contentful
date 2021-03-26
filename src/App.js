import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import { client } from "./client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./components/Weather";
import Home from "./components/Home";
import { createStore } from "redux";
import reducer from "./components/redux/reducer";
import { getWeather } from "./components/redux/actions";
import { Provider } from "react-redux";
import GetIP from "./components/GetIP";
import Spinner from "./components/Spinner";

export let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => console.log(store.getState()))

export default class App extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    GetIP();

    client
      .getEntries()
      .then((response) => {
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home posts={this.state.articles} />
              </Route>
              <Route path="/weather">
                <Weather />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

// export default App;
