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
  sendData = () => {
    this.props.parentCallback(this.state.title);
  };
  //---------------------CallBack Handler/state management----------------------------
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
       <button onClick={this.sendData}>Add to sidebar</button>
      </div>
    );
  }
}

export default CardCreator;
