





// ========


import React, { Component } from "react";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

import github_icon from '../GitHub_icon.png';

import { extractLocations, getEvents } from "../api";


import "../styles/App.css";
import "../styles/nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          currentLocation: location,
        });
      }
    });
  };



  render() {
    const { events, locations, numberOfEvents } = this.state;


    return (

      <div className="App">

        <CitySearch
          locations={locations}
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents} />

        <NumberOfEvents
          updateNumberOfEvents={(number) => {
            this.updateNumberOfEvents(number);
          }} />

        <EventList
          events={events}
          numberOfEvents={numberOfEvents} />

        <p className="author">ssoewandi :: 2022</p>

        <img
          className="icon"
          alt="github_icon"
          src={github_icon}
          width="25"
          height="25"
        />
      </div>
    );
  }
}

export default App;

