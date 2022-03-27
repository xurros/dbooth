import React, { Component } from "react";



class Event extends Component {
  state = {
    event: {},
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state

    return (


      <div className="event" border="secondary" style={{ width: "60rem" }}>
        <h5 className="event-summary">
          {event.summary}
        </h5>

        <p className="startDate">
          {event.start.dateTime}{" "}
          <span className="timeZone">
            ({event.start.timeZone})
          </span>
        </p>

        <p className="location">
          @ {event.summary}{" "}:: {" "}
          <span>{event.location}</span>
        </p>

        <button
          className={`event-button ${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </button>


        {!collapsed && (
          <div
            className={`more-details ${this.state.collapsed ? "hide" : "show"}`}
          >

            <br />

            <h3 className="about">about:</h3>
            <a
              className="googleEvent"
              href={event.htmlLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              details on Google Calendar
            </a>

            <p className="description"> {event.description}</p>
          </div>
        )}

      </div>


    );
  }
}

export default Event;
