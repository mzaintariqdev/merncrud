import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ShowApi from "./showApi";
import AddApi from "./addApi";
import EditApi from "./editApi";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact component={ShowApi} />
          <Route path="/create" component={AddApi} />
          <Route path="/edit/:id" component={EditApi} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;