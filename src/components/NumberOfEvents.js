import React, { Component } from "react";
import { ErrorAlert } from '../Alert';


class NumberOfEvents extends Component {
  state = {
    numberOfEvents: "32",
    infoText: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: "",
        infoText: "Please enter the number between 1 and 32"
      });
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: "",
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
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
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;