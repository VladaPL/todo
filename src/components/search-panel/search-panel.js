import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        label: ''
    }

    onLabelSearch = (e) => {
        this.setState({
            label: e.target.value
        });

        console.log(e.target.value);
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onLabelSearch(this.state.label);
        console.log(this.state.label);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control search-input" 
                    placeholder="type to search"
                    onChange={this.onLabelSearch} />
            </form>

        );
    }

};


