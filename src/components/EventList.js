import React, { Component } from "react";
import Event from "./Event";
import { WarningAlert } from "../Alert";


class EventList extends Component {
  render() {
    const { events, numberOfEvents } = this.props;

    return (
      <div className="EventList">
        {!navigator.onLine ? (
          <WarningAlert text="No internet connection. Cache data is being used." />
        ) : (
          <WarningAlert text="" />
        )}


        {events.map((event, index) => {
          console.log(event, numberOfEvents)
          if (index + 1 <= numberOfEvents) {
            return (
              <div 
                key={event.id}>
                <Event event={event} />
              </div>
            )
          } else
            return undefined
        }
        )}
      </div>
    );

  }
}

export default EventList;