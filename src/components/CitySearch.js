import React, { Component } from "react";
import { InfoAlert } from "../Alert";


class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    })
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: "City not found. Please try another city",
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: "",
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: "",
    });
    // let locations = this.props.suggestions;
    this.props.updateEvents(suggestion);
  };

  render() {
    return (

      <div className="CitySearch">
        <p> Select a city:</p>
        <div>
          <input
            type="text"
            className="city"
            placeholder="start here ..."
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
          />
          <InfoAlert className="alert" text={this.state.infoText} />
        </div>

        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          <br />
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))
          }
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>

          </li>
        </ul >
      </div>
    );
  }
}

export default CitySearch;