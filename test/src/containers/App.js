import React, { Component } from "react";
import SideBar from "../components/SideBar/SideBar";
import CardCreator from "../components/CardCreator/CardCreator";
import "./App.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <SideBar/>
        <CardCreator/>
      </div>
    );
  }
}

export default App;
