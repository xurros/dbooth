
import React, { Component } from "react";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Chart from "./Rechart"
import EventGenre from "./EventGenre"
// import WelcomeScreen from "../WelcomeScreen";


import github_icon from '../GitHub_icon.png';

// import { extractLocations, getEvents, getAccessToken, checkToken } from "../api";
import { extractLocations, getEvents } from "../api";

import Navbar from 'react-bootstrap/Navbar'


import "../styles/App.css";
import "../styles/nprogress.css";
import Logo from "../logo.png"

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    filteredEvents: [],
    currentLocation: "all",
    showWelcomeScreen: undefined,
  }

  // async componentDidMount() {
  //   this.mounted = true;
  //   const accessToken = localStorage.getItem("access_token");
  //   const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  //   console.log('isTokenValid', isTokenValid)
  //   const searchParams = new URLSearchParams(window.location.search);
  //   console.log('searchParams', searchParams)
  //   const code = searchParams.get("code");
  //   console.log('code', code)

  //   this.setState({ showWelcomeScreen: !(code || isTokenValid) });

  //   if ((code || isTokenValid) && this.mounted) {


  //     getEvents().then((events) => {
  //       if (this.mounted) {
  //         this.setState({
  //           events,
  //           filteredEvents: events,
  //           locations: extractLocations(events)
  //         });
  //       }
  //     });
  //   }
  // };


  // async componentDidMount() {
  //   this.mounted = true;
  //   const accessToken = localStorage.getItem("access_token");
  //   const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const code = searchParams.get("code");

  //   this.setState({ showWelcomeScreen: !(code || isTokenValid) });
  //   if ((code || isTokenValid) && this.mounted) {
  //     getEvents().then((events) => {
  //       if (this.mounted) {
  //         this.setState({ events, locations: extractLocations(events) });
  //       }
  //     });
  //   }
  // };



  componentDidMount() {
    this.mounted = true;

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          filteredEvents: events,
          locations: extractLocations(events),
        })
      }
    });
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

  logOut = () => {
    localStorage.removeItem("access_token")
    this.componentDidMount()
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    const { filteredEvents, locations, numberOfEvents } = this.state;

    // if (this.state.showWelcomeScreen === undefined)
    // return <div className="App" />;


    return (

      <div className="App">
        <div className="title-wrapper">
          <a href="/">
            <img className="booth-logo" alt="logo" src={Logo} />
          </a>
          <div>
          <Navbar.Brand className="logo">
            dBooth Meet App
          </Navbar.Brand>
        </div>
        </div>

    
        <div>
          <div className="city-search-box">
            <CitySearch
              locations={locations}
              numberOfEvents={numberOfEvents}
              updateEvents={this.updateEvents} />
          </div>

          <div className="number-box">
            <NumberOfEvents
              updateNumberOfEvents={(number) => {
                this.setState({ numberOfEvents: number })
              }}
              numberOfEvents={numberOfEvents}
            />
          </div>
        </div>


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="chart-wrapper">
          <h4>Pie and Scattered Charts</h4>
          <br />
          <br />
          <br />


          <div className="data-vis-wrapper">
            <EventGenre
              className="event-genre"
              events={filteredEvents}
            />

            <Chart
              locations={locations}
              displayedEvents={filteredEvents}
            />

          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <EventList
          events={filteredEvents}
          numberOfEvents={numberOfEvents}
        />

        <p className="author">ssoewandi :: 2022</p>

        <a href="https://xurros.github.io/dbooth">
          <img
            className="icon"
            alt="github_icon"
            src={github_icon}
            width="25"
            height="25"
          />
        </a>
        {/* </Container> */}

        {/* 
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }}
        /> */}
      </div>

    );
  }
}

export default App;

