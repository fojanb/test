import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardCreator.css";
class CardCreator extends Component {
  state = { showCard: false,message:"" };
  //---------------------Event Handlers Start--------------------------
  AddCardHandler = () => {
    let doesShow = this.state.showCard;
    this.setState({ showCard: !doesShow });
  };

  //---------------------Event Handlers End----------------------------
  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };
  render() {
    let card = null;
    if (this.state.showCard) {
      card = (
        <div>
          <Card parentCallback = {this.callbackFunction}/>
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
