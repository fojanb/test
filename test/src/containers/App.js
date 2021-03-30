import React, { Component } from "react";
import SideBar from "../components/SideBar/SideBar";
import "./App.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <SideBar/>
      </div>
    );
  }
}

export default App;
