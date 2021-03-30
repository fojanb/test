import React, { Component } from 'react';
import "./Card.css"
class Card extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Card">
                <h3>Role Management</h3>
                <p>Manage Roles and its permissions</p>
                <button>Role</button>
            </div>
        );
    }
}
 
export default Card;