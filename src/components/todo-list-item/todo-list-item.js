import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

    this.onLableClick = () => {
      this.setState({
        done: true
      });
    };

    this.onMarkImportant = () => {
      this.setState({
        important: true
      });
    };
  }

  render () {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if(done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important';
    }
  
    return (
      <div className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLableClick}>
          {label}
        </span>
        <span className='wrapper-button'>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick = {this.onMarkImportant}>
            <i className="fa fa-trash-o" />!
          </button>
    
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-exclamation" />
          </button>
        </span>
      </div>
    );
  };
}



