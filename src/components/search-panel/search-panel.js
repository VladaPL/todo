import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        textOfSearch: ''
    };

    onSearchChange = (e) => {
        const textOfSearch = e.target.value;
        this.setState({textOfSearch});
        this.props.onSearchChange(textOfSearch);
    };

    render() {
        return (
                <input type="text"
                    className="form-control search-input" 
                    placeholder="type to search"
                    value={this.state.textOfSearch}
                    onChange={this.onSearchChange} />
        );
    }
};


