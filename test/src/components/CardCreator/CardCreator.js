import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardCreator.css";
class CardCreator extends Component {
  state = { showCard: false, title: "" };
  //---------------------Event Handlers Start------------------------
  AddCardHandler = () => {
    let doesShow = this.state.showCard;
    this.setState({ showCard: !doesShow });
  };

  //---------------------CallBack Handler----------------------------
  callbackFunction = (childData) => {
    this.setState({ title: childData });
  };
  //-----------------------------------------------------------------
  render() {
    let card = null;
    if (this.state.showCard) {
      card = (
        <div>
          <Card parentCallback={this.callbackFunction} />
        </div>
      );
    }

    return (
      <div>
        <div className="CardCreator">
          <button onClick={this.AddCardHandler}>Create Card</button>
        </div>
        {card}
      </div>
    );
  }
}

export default CardCreator;
