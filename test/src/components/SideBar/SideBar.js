import React, { Component } from "react";
import "./SideBar.css";
class SideBar extends Component {
  state = {title : ''};
  render() {
    // const setNewitem = () =>{
    //   let box = document.createElement('div');
    //   box.classList.add("items");
    //   box.innerText = this.props.newItem;
    //   let board = document.getElementById("SideBarStyles")
    //   board.appendChild(box);

    // }
    return (
      <div className="SideBarStyles" id="SideBarStyles">
        <h3>Side Bar Component</h3>
        <div className="items">Stats</div>
        <div className="items">Settings</div>
        <div className="items">Payment</div>
        <div className="items">{this.props.newItem}</div>
        <div id="newCardName"></div>
      </div>
    );
  }
}

export default SideBar;
