

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
    locations: [],
    numberOfEvents: 10,
    filteredEvents: [],
    currentLocation: "all",

  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({
        events,
        filteredEvents: events,
        locations: extractLocations(events),
      });
    }
    );
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const events = this.state.events;
    const locationEvents =
      location === "all"
        ? events
        : events.filter((event) => event.location === location);
    if (this.mounted) {
      this.setState({
        filteredEvents: locationEvents.slice(0, eventCount),
        currentLocation: location,
      });
    }
  };

  render() {
    const { filteredEvents, locations, numberOfEvents } = this.state;


    return (

      <div className="App">
        <h4 className="title"> dBooth Meet App </h4>
        <p className="subtitle"> where people get connected </p>

        <CitySearch
          locations={locations}
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents} />

        <NumberOfEvents
          updateNumberOfEvents={(number) => {
            this.setState({ numberOfEvents: number })
          }}
          numberOfEvents={numberOfEvents}
        />

        <EventList
          events={filteredEvents}
          numberOfEvents={numberOfEvents}
          errorText={this.state.errorText} />

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

