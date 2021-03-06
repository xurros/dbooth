import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}> {this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#3A8E3E";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#F47333"
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#FF33A2";
  }
}



export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };
