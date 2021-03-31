import React, { Component } from "react";
import SideBar from "../components/SideBar/SideBar";
import CardCreator from "../components/CardCreator/CardCreator";
import "./App.css";
class App extends Component {
  state = { title: "" };

  callbackFunction = (childData) => {
    this.setState({ title: childData });
  };
  render() {
    return (
      <div className="App">
        <SideBar newItem={this.state.title} />
        <CardCreator parentCallback={this.callbackFunction} />
      </div>
    );
  }
}

export default App;
