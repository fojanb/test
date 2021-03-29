import React, { Component } from "react";
import "./SideBar.css";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="SideBarStyles">
        <h3>Side Bar Component</h3>
        <div className="items">Example #1</div>
        <div className="items">Example #2</div>
        <div className="items">Example #3</div>

      </div>
    );
  }
}

export default SideBar;
