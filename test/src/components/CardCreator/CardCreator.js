import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardCreator.css";
class CardCreator extends Component {
  state = {
    titleArray: [],
  };

  //---------------------Event Handlers Start------------------------
  createCard = () => {
    const title = this.state.titleArray;
    title.push(title);
    this.setState({ titleArray: title });
  };
  //---------------------CallBack Handler/state management----------------------------
  callbackFunction = (childData) => {
    const dataRecived = [];
    dataRecived.push(childData);
    this.setState({ titleArray: dataRecived });
  };
  //-----------------------------------------------------------------
  render() {
    return (
      <div>
        <div className="CardCreator">
          <button onClick={this.createCard}>Create Card</button>
          <div className="DefaultCards">
            <Card />
            <Card />
            <Card />
            {this.state.titleArray.map((title, index) => {
              return (
                <div className="card">
                  <Card parentCallback={this.callbackFunction} key={index} />
                </div>
              );
            })}
          </div>

          <div className="CardGrid">
            
          </div>
        </div>
      </div>
    );
  }
}

export default CardCreator;
