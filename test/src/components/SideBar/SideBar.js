import React, { Component } from "react";
import "./SideBar.css";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="SideBarStyles">
        <h3>Side Bar Component</h3>
        <div className="items">Stats</div>
        <div className="items">Settings</div>
        <div className="items">Payment</div>
        <div id="newCardName"></div>
      </div>
    );
  }
}

export default SideBar;
