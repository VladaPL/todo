import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-outline-secondary button-add-item"
          onClick={() => this.props.onItemAdded("Hello item!")}
        >
          Add Item
        </button>
      </div>
    );
  }
}
