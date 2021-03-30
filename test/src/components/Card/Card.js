import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  state = {};
  sendData = () => {
    this.props.parentCallback("text");
  };
  render() {

    return (
      <div className="Card">
        <h3 id="title">Role Management</h3>
        <p>Manage Roles and its permissions</p>
        <button  onClick={this.sendData}>Add</button>
      </div>
    );
  }
}

export default Card;
