import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  state = { title: '' };
  sendDataToParent = () => {
    this.props.parentCallback(this.state.title);
  };
  inputHandler = (e) => {
      this.setState({title:e.target.value})
  };
  render() {
    return (
      <div className="Card">
        <input onChange={this.inputHandler}></input>
        <p>Some lorem ipsum here</p>
        <button onClick={this.sendDataToParent}>Add</button>
      </div>
    );
  }
}

export default Card;
