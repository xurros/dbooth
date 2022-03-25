import React, { Component } from "react";
import Event from "./Event";
import { WarningAlert } from "../Alert";


class EventList extends Component {
  render() {
    const { events, numberOfEvents } = this.props;

    return (
      <ul className="EventList">
        {!navigator.onLine ? (
          <WarningAlert text="No internet connection. Cache data is being used." />
        ) : (
          <WarningAlert text="" />
        )}


        {events.map( (event, index) => {
          console.log(event, numberOfEvents)
          if (index + 1 <= numberOfEvents) {
            return (
              <li key={event.id}>
                <Event event={event} />
              </li>
            )} else 
            return undefined
        }
        )}
      </ul>
    );

  } 
}

export default EventList;