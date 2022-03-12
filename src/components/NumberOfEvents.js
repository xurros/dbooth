import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: "15",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: number,
      });
    } else {
      this.setState({
        numberOfEvents: number,
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>number of events</p>

        <input
          type="number"
          min={1}
          max={32}
          className="eventsNumber"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;