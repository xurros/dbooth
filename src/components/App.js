import React, { Component } from "react";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "../WelcomeScreen";

import github_icon from '../GitHub_icon.png';

import { extractLocations, getEvents, checkToken, getAccessToken } from "../api";
import { WarningAlert } from "../Alert";



import "../styles/App.css";
import "../styles/nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        OfflineTextAlert: "No internet connection at this moment",
      });
    } else {
      this.setState({
        OfflineTextAlert: "",
      });
    }
  }


  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = async (location, eventCount = this.state.numberOfEvents) => {

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

  updateNumberOfEvents = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount,
    });
    this.updateEvents(currentLocation, eventCount);
  };


  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {

    const { events, locations, numberOfEvents, OfflineTextAlert } = this.state;

    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        <h4> dBooth Meet App</h4>

        <CitySearch
          locations={locations}
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />

        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents}
        />

        <EventList
          events={events}
          numberOfEvents={numberOfEvents}
        />

        <WarningAlert
          text={OfflineTextAlert}
        />


        <p className="author">ssoewandi :: 2022</p>

        <img
          className="icon"
          alt="github_icon"
          src={github_icon}
          width="25"
          height="25"
        />

        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }}
        />

      </div>
    );
  }
}

export default App;

