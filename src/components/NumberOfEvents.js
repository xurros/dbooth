import React, { Component } from "react";
import { ErrorAlert } from '../Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: "",
        errorText: "Select a number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
  }
this.props.updateNumberOfEvents(event.target.value);
};

render() {
  return (
    <div className="NumberOfEvents">

      <p>number of events</p>

      <input type="number" className="number"
        min={1} max={32}
        value={this.state.numberOfEvents}
        // onChange={(e) => this.props.updateNumberOfEvents(e.target.value)} />
        onChange={this.handleInputChanged} />

<ErrorAlert text={this.state.errorText} />
    </div>
  )
}
};
export default NumberOfEvents;